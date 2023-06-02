import { FC } from 'react';
import capitalize from 'lodash/capitalize';
import { Link } from 'react-router-dom';

import styles from './listing-card.module.scss';

import { FormState } from '@/types/FormTypes';
import { convertTimestampToDate } from '@/utils/helpers';

type ListingCardProps = { item: FormState };

const ListingCard: FC<ListingCardProps> = ({ item }) => {
  return (
    <article key={item.id} className={styles['listing-card']}>
      <span className={styles['listing-card__price']}>
        {item.latest_price_eur} &euro;
      </span>
      <ul className={styles['listing-card__properties']}>
        <li className={styles['listing-card__properties-item']}>
          {capitalize(item.building_type)}
        </li>
        <li className={styles['listing-card__properties-item']}>
          {item.surface_area_m2}m<sup>2</sup>
        </li>
        <li className={styles['listing-card__properties-item']}>
          {item.rooms_count} rooms
        </li>
      </ul>
      <section className={styles['listing-card__address']}>
        <address>{`${item.postal_address.street_address}, ${item.postal_address.postal_code}, ${item.postal_address.city}`}</address>
      </section>
      <section className={styles['listing-card__description']}>
        <h3>Property description: </h3>
        <p>{item.description}</p>
      </section>
      <div className={styles['listing-card__footer']}>
        <p className={styles['listing-card__reference']}>
          {/* Note that it is not clear what is value of Ref is. Therefore, for sake of unique listing, using id as a reference number. */}
          Ref: {item.id} <br />
          Last update: {convertTimestampToDate(item.updated_date)}
        </p>
        <Link to={`${item.id}/prices`} className={styles['listing-card__link']}>
          See history &rarr;
        </Link>
      </div>
    </article>
  );
};

export default ListingCard;
