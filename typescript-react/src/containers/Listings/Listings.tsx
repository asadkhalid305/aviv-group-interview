import { useState } from 'react';
import ListingCard from '@components/ListingCard';
import ListingForm from '@components/ListingForm';

import styles from './listings.module.scss';

const Listings = () => {
  const [fetchListings, setFetchListings] = useState(false);

  return (
    <main className={styles['listings']}>
      <h1 className={styles['listings__title']}>Main Listings page</h1>
      <div className={styles['listings__wrapper']}>
        <aside className={styles['listings__aside']}>
          <h2 className={styles['listings__sub-title']}>Add a listing</h2>
          <ListingForm setFetch={setFetchListings} />
        </aside>
        <section className={styles['listings__section']}>
          <h2 className={styles['listings__sub-title']}>Listings</h2>
          <ListingCard fetch={fetchListings} setFetch={setFetchListings} />
        </section>
      </div>
    </main>
  );
};

export default Listings;
