DROP DATABASE IF EXISTS takehome_dev;
CREATE DATABASE takehome_dev;

\c takehome_dev;

Drop TABLE IF EXISTS joined_raffle;
Drop TABLE IF EXISTS raffles;
Drop TABLE IF EXISTS participants;

CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    raffle_name TEXT NOT NULL,
    secret_token TEXT NOT NULL,
    created_at timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    winner_id INTEGER,
    raffle_date timestamptz
);


CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255)  NOT NULL,
    last_name VARCHAR(255)  NOT NULL,
    email VARCHAR(255)  NOT NULL,
    phone VARCHAR(255)
);

CREATE TABLE joined_raffle (
    id SERIAL PRIMARY KEY,
    raffle_id integer REFERENCES raffles(id) ON DELETE CASCADE,
    participant_id integer REFERENCES participants(id) ON DELETE CASCADE
);