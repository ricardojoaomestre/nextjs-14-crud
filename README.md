This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Summary

Very simple app the performs the basic CRUD actions and accesses a public API using NextJS 14 and makes the most out of SSR and server actions.

Is connected to a mongoDB database and uses prisma as ORM.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To configure the database follow these steps:

1. Create a `.env.local` file and add a `DATABASE_URL` environment variable with the connection string to your database. Project is prepared to use `mongodb` but if you want to change that do it on the `prisma/prisma.schema` file.

2. generate the database schema `npx prisma generate`

3. Open the browser on http://localhost:3000
