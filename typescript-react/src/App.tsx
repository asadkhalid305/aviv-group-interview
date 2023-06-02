import Header from '@components/Header/Header';
import ListingHistory from '@containers/ListingHistory/ListingHistory';
import Listings from '@containers/Listings/Listings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/:listingId/prices" element={<ListingHistory />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
