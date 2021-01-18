require('dotenv').config()

module.exports ={
  env: {
    API : process.env.API_KEY
  },
  basePath : process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
};