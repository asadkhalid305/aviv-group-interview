import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import PricesHistory from './PricesHistory';

const routeParams = { listingId: '1' };

describe('<PricesHistory /> test suite', () => {
  it('Should render the <PricesHistory /> component', () => {
    render(
      <MemoryRouter initialEntries={[`/${routeParams.listingId}/prices`]}>
        <Routes>
          <Route path="/:listingId/prices" element={<PricesHistory />} />
        </Routes>
      </MemoryRouter>,
    );
  });
});
