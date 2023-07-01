const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  port: "5432",
  host: "localhost",
  password: "friquently39",
  database: "users",
});

module.exports = pool;
