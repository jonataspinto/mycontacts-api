require('dotenv').config();

const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const notFound = require('./app/middlewares/notFound');
const rateLimiter = require('./app/middlewares/rateLimiter');

const routes = require('./routes');

const app = express();

app.use(rateLimiter);

app.use(express.json());

app.use(cors);

app.use(routes);

app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.group('Server started at');
  console.log(`http://localhost:${port}`);
  console.groupEnd();
});
