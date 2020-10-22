// const dotenv = require("dotenv").config();

// const envDefaults = {
//   NODE_ENV: "production",
//   HOST: "localhost",
//   PORT: 1338,
//   URL: "http://localhost:1338",
// };

module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm start",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
