import PostgresClient from "serverless-postgres";
import { Price, PriceWrite } from "@/types.generated";
import { extractVariables } from "@/libs/postgres";
import { EntityNotFound } from "@/libs/errors";

type PriceHistoryTableRow = {
  id?: number;
  listing_id: number;
  created_date: Date;
  price: number;
};

function tableRowToPriceHistory(row: PriceHistoryTableRow): Price {
  return {
    id: row.id,
    price_eur: row.price,
    listing_id: row.listing_id,
    created_date: row.created_date.toISOString(),
  };
}

function priceHistoryToTableRow(
  priceHistory: PriceWrite,
  createdDate: Date
): PriceHistoryTableRow {
  return {
    price: priceHistory.price_eur,
    listing_id: priceHistory.listing_id,
    created_date: createdDate,
  };
}

export function getRepository(postgres: PostgresClient) {
  return {
    async getPriceHistory(listingId: number): Promise<Price[]> {
      const queryString = `SELECT * FROM price_history WHERE listing_id = $1`;
      const queryValues = [listingId];

      const result = await postgres.query(queryString, queryValues);
      const priceHistory = result.rows;

      if (!priceHistory) {
        throw new EntityNotFound(
          `Could not find price history with listing id: ${listingId}`
        );
      }

      return priceHistory.map((item) => tableRowToPriceHistory(item));
    },

    async insertPriceHistory(priceListing: PriceWrite) {
      const tableRow = priceHistoryToTableRow(priceListing, new Date());

      const {
        columns,
        variables,
        values: queryValues,
      } = extractVariables(tableRow);

      const queryString = `
        INSERT INTO price_history (${columns.join(",")})
        VALUES(${variables})
        RETURNING *
      `;
      const result = await postgres.query(queryString, queryValues);

      return result.rows.map((item) => tableRowToPriceHistory(item));
    },
  };
}
