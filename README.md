# API for online restaurant's booking system.

- The API provides users with the ability to register and book a table for an available date and time
- It is possible to pre-order some dishes via the API
- Payment is made offline at the restaurant so no API is required for it 

## Tech

Api uses a number of open source projects to work properly:

- [Node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://expressjs.com/) - fast node.js network app framework [@tjholowaychuk]
- [Sequelize](https://sequelize.org/) - is a promise-based [Node.js](https://nodejs.org/en/about/) [ORM tool](https://en.wikipedia.org/wiki/Object-relational_mapping) for [Postgres](https://en.wikipedia.org/wiki/PostgreSQL), [MySQL](https://en.wikipedia.org/wiki/MySQL), [MariaDB](https://en.wikipedia.org/wiki/MariaDB), [SQLite](https://en.wikipedia.org/wiki/SQLite) and [Microsoft SQL Server](https://en.wikipedia.org/wiki/Microsoft_SQL_Server). It features solid transaction support, relations, eager and lazy loading, read replication and more.
- [node-postgres](https://www.npmjs.com/package/pg) - non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/adamyanlina/restaurant-booking-system.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Configuration

Create a .env file and add the following variables in it 
   ```shell
   PORT=8080
   API_VERSION=/api/v1.0
   CLIENT_ID=572296194539-dlh6fu3dke3ok7lp0vl620kefi9j5s2f.apps.googleusercontent.com
   ```

## Documentation

You will be able to find the documentation by following this [Postman link](https://documenter.getpostman.com/view/#)

The database model can be viewed at [dbdesigner.net](https://dbdesigner.page.link/chUDgevi7u5ryDRp8)

## License

MIT