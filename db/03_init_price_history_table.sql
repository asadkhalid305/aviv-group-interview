CREATE TABLE IF NOT EXISTS public.price_history
(
    id                   serial           primary key,
    listing_id           serial           foreign key,
    price                double precision not null,
    created_date         timestamp,
);
