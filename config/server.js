module.exports = ({ env }) => {
  const _env = {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
  };

  return {
    host: _env.host,
    port: _env.port,
    url: env("URL", "http://" + _env.host + ":" + _env.port),
    admin: {
      auth: {
        secret: env("ADMIN_JWT_SECRET", "9ff58f56a2c1ec02f2706c042c120f4c"),
      },
    },
  };
};
