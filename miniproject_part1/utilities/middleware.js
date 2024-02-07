const cors = require('cors');
const morgan = require('morgan');

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const logger = morgan('dev');

module.exports = {
  corsOptions,
  logger,
};
