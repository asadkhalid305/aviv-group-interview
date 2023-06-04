import { getRepository } from "@/repositories/price_history";

import { functionHandler } from "@/libs/function";
import { Price } from "@/types.generated";

export const getListingPrices = functionHandler<Price[]>(
  async (event, context) => {
    const priceHistory = await getRepository(context.postgres).getPriceHistory(
      parseInt(event.pathParameters.id)
    );

    return { statusCode: 200, response: priceHistory };
  }
);
