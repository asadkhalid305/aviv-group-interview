import { useEffect, useState } from 'react';
import PricesHistoryCard from '@components/PriceHistoryCard';
import { useParams } from 'react-router-dom';

import styles from './prices-history.module.scss';

import { PriceHistory } from '@/types/PriceHistoryTypes';
import { getListingById } from '@/utils/requests';

const PricesHistory = () => {
  const { listingId } = useParams();
  const [listingPrices, setListingPrices] = useState<PriceHistory[]>([]);

  useEffect(() => {
    getListingById(Number(listingId)).then((data) => {
      setListingPrices(data);
    });
  }, [listingId]);

  return (
    <div className={styles['price-history']}>
      <h1>Prices History</h1>
      <PricesHistoryCard items={listingPrices} />

      <a href="/" className={styles['price-history__link']}>
        &larr; Back Home
      </a>
    </div>
  );
};
export default PricesHistory;
