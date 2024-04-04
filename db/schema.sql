DROP DATABASE IF EXISTS takehome_dev;
CREATE DATABASE takehome_dev;

\c takehome_dev;

Drop TABLE IF EXISTS raffles;

CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    raffle_name TEXT NOT NULL,
    secret_token TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    winner_id INTEGER,
    raffle_date TIMESTAMP
);

Drop TABLE IF EXISTS participants;

CREATE TABLE participants (
    participant_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) UNIQUE NOT NULL,
    last_name VARCHAR(255) UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone VARCHAR(255)
);
