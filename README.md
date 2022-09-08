# CoinTracker Takehome

Full-Stack app using the following technologies

- [Next.js](https://nextjs.org/) as the [React](https://reactjs.org/) framework
- [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) for server-side API routes as the backend
- [Prisma](https://www.prisma.io/) as the ORM
- SQLite as the database

I decided to go with Next.js here as the frontend framework because it's a great framework that I'm familiar with, and also offers Next.js API routes as an extremely simple way to build a backend, avoiding needing to set up a server. Also went with SQLite as the db since this app is not very demanding.

## Usage

### Install dependencies

```
yarn install
```

Run in dev mode

```
yarn dev
```

## Using the REST API

### `GET`

- `/api/wallet/` : Get all wallets
- `/api/wallet/:id` : Get a single wallet by id

### `POST`

- `/api/wallet/` : Create a new wallet
    - Body:
        - `address: String` (required): The wallet address

### `DELETE`
  
- `/api/wallet/:id` : Delete a wallet by its id
