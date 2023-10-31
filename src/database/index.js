const { Client } = require('pg');

// when to run with docker use "db" (container name to postgres in docker-compose.yml) as host.
// running "yarn dev" use "localhost" as host
const client = new Client({
  host: 'pg',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
