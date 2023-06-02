import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './listing-history.module.scss';

import ListingHistoryCard from '@/components/ListingHistoryCard/ListingHistoryCard';
import { ListingPriceHistory } from '@/types/ListingsTypes';
import { getListingById } from '@/utils/requests';

const ListingHistory = () => {
  const { listingId } = useParams();
  const [listingPrices, setListingPrices] = useState<ListingPriceHistory[]>([]);

  useEffect(() => {
    getListingById(Number(listingId)).then((data) => {
      setListingPrices(data);
    });
  }, [listingId]);

  return (
    <main className={styles['listing-history']}>
      <section className={styles['listing-history__header']}>
        <Link to="/" className={styles['listing-history__link']}>
          &larr; Go Back
        </Link>
        <h1 className={styles['listing-history__title']}>
          Listing History page
        </h1>
      </section>
      <section>
        <h2 className={styles['listing-history__sub-title']}>Prices</h2>
        {listingPrices.map((item: ListingPriceHistory) => (
          <ListingHistoryCard item={item} />
        ))}
      </section>
    </main>
  );
};

export default ListingHistory;
