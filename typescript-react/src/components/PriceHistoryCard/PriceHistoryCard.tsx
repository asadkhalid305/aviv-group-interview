import { FC } from 'react';

import styles from './price-history-card.module.scss';

import { PriceHistory } from '@/types/PriceHistoryTypes';
import { convertTimestampToDate } from '@/utils/helpers';

type PriceHistoryCardProps = {
  items: PriceHistory[];
};

const PriceHistoryCard: FC<PriceHistoryCardProps> = ({ items }) => {
  return (
    <div className={styles['price-history-card']}>
      <table className={styles['price-history-card__price-card']}>
        <tbody>
          <tr className={styles['price-history-card__price-card__header']}>
            <th scope="col">Date</th>
            <th scope="col">Price (eur)</th>
          </tr>
          {items.map((item) => (
            <tr>
              <td>{convertTimestampToDate(item.created_date)}</td>
              <td>{item.price_eur} &euro;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PriceHistoryCard;
