\c takehome_dev;

INSERT INTO raffles (raffle_name, secret_token, raffle_date, winner_id)
VALUES
    ('Raffle 1', 'token1', '2024-03-20 12:00:00', 1),
    ('Raffle 2', 'token2', '2024-03-21 12:00:00', 5),
    ('Raffle 3', 'token3', '2024-03-22 12:00:00', 9),
    ('Raffle 4', 'token4', null, null),
    ('Raffle 5', 'token5', null, null),
    ('Raffle 6', 'token6', null, null),
    ('Raffle 7', 'token7', null, null),
    ('Raffle 8', 'token8', null, null),
    ('Raffle 9', 'token9', null, null),
    ('Raffle 10', 'token10', null, null),
    ('Raffle 11', 'token11', null, null);

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
    (5, 15),
    (6, 1),
    (6, 2),
    (6, 3),
    (7, 4),
    (7, 5),
    (7, 6),
    (8, 7),
    (8, 8),
    (8, 9),
    (9, 10),
    (9, 11),
    (9, 12),
    (10, 13),
    (10, 14),
    (10, 15),
    (11, 1),
    (11, 2),
    (11, 3);


