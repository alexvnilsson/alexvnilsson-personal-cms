const dotenv = require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm start",
      watch: true,
      env: {
        NODE_ENV: "production",
        ...dotenv.parsed,
      },
    },
  ],
};
