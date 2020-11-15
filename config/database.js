module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "firestore",
      settings: {
        projectId: env("GOOGLE_CLOUD_PROJECT_ID", undefined),
        keyFilename: "secrets/gcp_firestore.key",
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
