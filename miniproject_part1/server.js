const express = require('express');
const cors = require('cors');
const { logger } = require('./utilities');
const routes = require('./routes');

const app = express();

// Middleware setup
app.use(logger);
app.use(express.json());
app.use(cors()); // Use cors directly without corsOptions if not needed

// Routes setup
app.use('/', routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
