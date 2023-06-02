import { render } from '@testing-library/react';

import ListingHistoryCard from './ListingHistoryCard';

const priceHistory = {
  created_date: '2023-01-12T09:23:36Z',
  price_eur: 100000,
};

describe('<ListingHistoryCard /> test suite', () => {
  it('Should render the <ListingHistoryCard /> component', () => {
    render(<ListingHistoryCard item={priceHistory} />);
  });
});
