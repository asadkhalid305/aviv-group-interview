import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import ListingHistory from './ListingHistory';

const routeParams = { listingId: '1' };

describe('<ListingHistory /> test suite', () => {
  it('Should render the <ListingHistory /> component', () => {
    render(
      <MemoryRouter initialEntries={[`/${routeParams.listingId}/prices`]}>
        <Routes>
          <Route path="/:listingId/prices" element={<ListingHistory />} />
        </Routes>
      </MemoryRouter>,
    );
  });
});
