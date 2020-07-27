// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/ts-wb-store",
  },
  test: {
    client: "pg",
    connection: "postgres://localhost/test-ts-wb-store",
  },
};
