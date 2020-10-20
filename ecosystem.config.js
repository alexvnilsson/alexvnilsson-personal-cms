const dotenv = require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "alexvnilsson-personal-cms",
      script: "npm start",
      watch: true,
      env: {
        NODE_ENV: "production",
        ...dotenv.parsed,
      },
    },
  ],
};
