# Raffle App Backend
1. Fork this repo
2. Install neccasry packages  
 `npm install cors dotenv express node nodemon pg-promise`
3. Touch .env  
`PORT=3003
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=movies_dev
PG_USER=postgres`
4. Add .env to .gitignore
5. Run the following commands in order to make create the tables and data
`npm run dbinit`  
`npm run dbseed`  
`nodemon server.js`

## Routes
GET	`/` Checks to make sure the app works
GET	`/api/raffles`	Lists all raffles in the databases
POST `/api/raffles`	Creates a new raffle	
GET	`/api/raffles/:id`	Get a raffle by its id	
GET	`/api/raffles/:id/participants`	Get all participants of a single raffle by id
POST	`/api/raffles/:id/participants`	Create a participant for a single raffle by id	
PUT	`/api/raffles/:id/winner` Picks a random winner from all the participants from one single raffle
GET	`/api/raffles/:id/winner` Get the winner of a single raffle by id