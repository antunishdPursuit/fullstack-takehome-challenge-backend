\c takehome_dev;

INSERT INTO raffles (raffle_name, secret_token, raffle_date, winner_id)
VALUES
    ('Raffle 1', 'token1', '2024-03-20 12:00:00', 1),
    ('Raffle 2', 'token2', '2024-03-21 12:00:00', 2),
    ('Raffle 3', 'token3', '2024-03-22 12:00:00', 3),
    ('Raffle 4', 'token4', '2024-03-23 12:00:00', 2),
    ('Raffle 5', 'token5', '2024-03-24 12:00:00', 10),
    ('Raffle 6', 'token6', null, null),
    ('Raffle 7', 'token7', '2024-03-26 12:00:00', 1),
    ('Raffle 8', 'token8', '2024-03-27 12:00:00', 6),
    ('Raffle 9', 'token9', null, null),
    ('Raffle 10', 'token10', '2024-03-29 12:00:00', 1),
    ('Raffle 11', 'token11', '2024-03-30 12:00:00', 5),
    ('Raffle 12', 'token12', '2024-03-31 12:00:00', 11),
    ('Raffle 13', 'token13', null, null),
    ('Raffle 14', 'token14', '2024-04-02 12:00:00', 1),
    ('Raffle 15', 'token15', null, null);

INSERT INTO participants (first_name, last_name, email, phone)
VALUES
    ('John', 'Doe', 'john.doe@example.com', '1234567890'),
    ('Jane', 'Smith', 'jane.smith@example.com', null),
    ('Alice', 'Johnson', 'alice.johnson@example.com', '5551234567'),
    ('Bob', 'Brown', 'bob.brown@example.com', '9998887776'),
    ('Emma', 'Davis', 'emma.davis@example.com', null),
    ('Michael', 'Wilson', 'michael.wilson@example.com', '4445556666'),
    ('Olivia', 'Martinez', 'olivia.martinez@example.com', '7778889999'),
    ('James', 'Taylor', 'james.taylor@example.com', '2223334444'),
    ('Sophia', 'Anderson', 'sophia.anderson@example.com', '6667778888'),
    ('William', 'Thomas', 'william.thomas@example.com', '8889990000'),
    ('Ella', 'Jackson', 'ella.jackson@example.com', '3334445555'),
    ('Alexander', 'White', 'alexander.white@example.com', '1231231234'),
    ('Ava', 'Harris', 'ava.harris@example.com', null),
    ('Noah', 'Clark', 'noah.clark@example.com', '7897897890'),
    ('Charlotte', 'Lewis', 'charlotte.lewis@example.com', '1010101010');

INSERT INTO joined_raffle (raffle_id, participant_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 4),
    (2, 5),
    (2, 6),
    (3, 7),
    (3, 8),
    (3, 9),
    (4, 10),
    (4, 11),
    (4, 12),
    (5, 13),
    (5, 14),
    (5, 15);

