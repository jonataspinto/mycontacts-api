const { Client } = require('pg');

// when to run with docker use "db" (container name to postgres in docker-compose.yml) as host.
// running "yarn dev" use "localhost" as host
const client = new Client({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
