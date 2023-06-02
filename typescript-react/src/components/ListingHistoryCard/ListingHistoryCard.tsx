import { FC } from 'react';

import styles from './listing-history-card.module.scss';

import { ListingPriceHistory } from '@/types/ListingsTypes';
import { convertTimestampToDate } from '@/utils/helpers';

type ListingHistoryCardProps = { item: ListingPriceHistory };

const ListingHistoryCard: FC<ListingHistoryCardProps> = ({ item }) => (
  <article className={styles['listing-history-card']}>
    <div className={styles['listing-history-card__price']}>
      {item.price_eur} &euro;
    </div>
    <p className={styles['listing-history-card__date']}>
      Last update: {convertTimestampToDate(item.created_date)}
    </p>
  </article>
);

export default ListingHistoryCard;
