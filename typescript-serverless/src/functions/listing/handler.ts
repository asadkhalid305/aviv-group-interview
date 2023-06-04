import { functionHandler } from "@/libs/function";
import { getRepository as getRepositoryListing } from "@/repositories/listings";
import { getRepository as getRepositoryPriceHistory } from "@/repositories/price_history";
import { Listing, ListingWrite, Price, PriceWrite } from "@/types.generated";
import { EntityNotFound, NotFound } from "@/libs/errors";

export const getListings = functionHandler<Listing[]>(
  async (_event, context) => {
    const listings = await getRepositoryListing(context.postgres).getAllListings();

    return { statusCode: 200, response: listings };
  }
);

export const addListing = functionHandler<Listing, ListingWrite>(
  async (event, context) => {
    const listing = await getRepositoryListing(context.postgres).insertListing(
      event.body
      );

    await getRepositoryPriceHistory(context.postgres).insertPriceHistory(
      { 
        price_eur: event.body.latest_price_eur,
        listing_id: listing.id
      }
    );

    return { statusCode: 201, response: listing };
  }
);

export const updateListing = functionHandler<Listing, ListingWrite>(
  async (event, context) => {
    try {
      const listing = await getRepositoryListing(context.postgres).updateListing(
        parseInt(event.pathParameters.id),
        event.body
      );

      await getRepositoryPriceHistory(context.postgres).insertPriceHistory(
        { 
          price_eur: event.body.latest_price_eur,
          listing_id: parseInt(event.pathParameters.id)
        }
      );

      return { statusCode: 200, response: listing };
    } catch (e) {
      if (e instanceof EntityNotFound) {
        throw new NotFound(e.message);
      }

      throw e;
    }
  }
);
