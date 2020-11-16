module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DATABASE_URI"),
      },
      options: {
        options: {
          // Connect to a local running Firestore emulator
          // when running in development mode
          useEmulator: env("NODE_ENV") == "development",
        },
      },
    },
  },
});
