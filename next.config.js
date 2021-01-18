require('dotenv').config()

module.exports ={
  env: {
    API: process.env.API_KEY,
    basePath : process.env.BASE_PATH,
    assetPrefix: process.env.BASEPATH
  }
  
};