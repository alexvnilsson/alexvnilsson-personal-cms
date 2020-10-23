module.exports = ({ env }) => ({
  upload: {
    provider: "google-cloud-storage",
    providerOptions: {
      bucketName: env("GOOGLE_CLOUD_STORAGE_NAME", "bucket_name"),
      publicFiles: true,
      uniform: true,
      serviceAccount: env.json("GOOGLE_CLOUD_STORAGE_KEY", {}),
      baseUrl: `https://storage.googleapis.com/${env(
        "GOOGLE_CLOUD_STORAGE_NAME",
        "bucket_name"
      )}`,
      basePath: "",
    },
  },
});
