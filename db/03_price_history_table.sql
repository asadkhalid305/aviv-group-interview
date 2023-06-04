CREATE TABLE IF NOT EXISTS public.price_history
(
    id                   serial           primary key,
    listing_id           integer          not null,
    price                double precision not null,
    created_date         timestamp,
    FOREIGN KEY (listing_id) REFERENCES listing(id)
);
