// index.js

const express = require('express');
const app = express();
const cors = require('cors');
const { logger } = require('./utilities');
const currencyRoutes = require('./routes/currencyRoutes');

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/currency', currencyRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
