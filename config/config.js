module.exports = {
  username: process.env.DATABASE_POSTGRES_USERNAME || "postgres",
  password: process.env.DATABASE_POSTGRES_PASSWORD || "postgres",
  database: "sequelize_api_" + (process.env.NODE_ENV || "development"),
  postgres: {
    dialect: "postgres",
    port: 5432,
    host: "localhost",
    omitNull: true,
    logging: (process.env.NODE_ENV === "test" ? false : console.log),
    define: { timestamp: true, underscored: true, charset: "utf8" },
    pool: { maxConnections: 10, maxIdleTime: 30 }
  }
};