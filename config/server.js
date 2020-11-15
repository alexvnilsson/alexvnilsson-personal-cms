module.exports = ({ env }) => {
  const _env = {
    host: env("HOST", "localhost"),
    port: env.int("PORT", 1337),
  };

  const defaults = {
    url: "http://" + _env.host + ":" + _env.port,
    admin_url: undefined,
  };

  defaults.admin_url = defaults.url + "/dashboard";

  return {
    host: _env.host,
    port: _env.port,
    url: env("URL", defaults.url),
    admin: {
      url: env("ADMIN_URL", defaults.admin_url),
      auth: {
        secret: env("ADMIN_JWT_SECRET", "9ff58f56a2c1ec02f2706c042c120f4c"),
      },
    },
  };
};
