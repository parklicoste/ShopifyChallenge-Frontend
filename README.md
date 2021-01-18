This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is deployed using vercel, link below:
[Shopify Frontend Challenge](https://shopify-challenge-frontend.vercel.app/)

## Getting Started
Before, Setting it up make sure you add your API KEY in .env.sample file
otherwise this app won't fetch data

If you want to get an OMDB key please visit:
[OMDB](http://www.omdbapi.com/)

```bash
npm install axios --save
npm install react-bootstrap bootstrap --save
npm install --save-dev cross-env dotenv
```

Now, start your development server,

```bash
npm run dev
# or
yarn dev
```
## Usage

This app is for nominating the movies, each user can nominate upto 5 movies.
Basic error checking is done:
  - if user enters nothing it doesn't search
  - if user tries to nominate less than 5 movies, it gives alert message 
  - if user tries to add more than 5 movies it informs user.
