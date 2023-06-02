import { useEffect, useState } from 'react';
import { FormEvent } from 'react';
import { useReducer } from 'react';
import ListingCard from '@components/ListingCard';
import ListingForm from '@components/ListingForm';

import styles from './listings.module.scss';

import { formReducer, initialState } from '@/reducers/formReducer';
import { FormState } from '@/types/FormTypes';
import { createListing, getListings } from '@/utils/requests';

const Listings = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [listingItems, setListingItems] = useState<FormState[]>([]);

  useEffect(() => {
    callGetListings();
  }, []);

  const callGetListings = () => {
    getListings().then((data) => {
      setListingItems(data);
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createListing(formData).then(() => {
      dispatch({ type: 'RESET' });
      callGetListings();
    });
  };

  return (
    <main className={styles['listings']}>
      <h1 className={styles['listings__title']}>Main Listings page</h1>
      <div className={styles['listings__wrapper']}>
        <aside className={styles['listings__aside']}>
          <h2 className={styles['listings__sub-title']}>Add a listing</h2>
          <ListingForm onSubmit={handleSubmit} />
        </aside>
        <section className={styles['listings__section']}>
          <h2 className={styles['listings__sub-title']}>Listings</h2>
          {listingItems.map((item) => (
            <ListingCard item={item} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Listings;
