# CoinTracker Takehome

Full-Stack app in TypeScript with [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Express](https://expressjs.com/) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client). Uses a SQLite db file.

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
