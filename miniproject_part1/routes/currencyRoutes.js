// currencyRoutes.js

const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

// Define routes
router.get('/', currencyController.getAllCurrencies);
router.get('/:id', currencyController.getCurrencyById);
router.post('/', currencyController.createCurrency);
router.put('/:id', currencyController.updateCurrencyRate);
router.delete('/:id', currencyController.deleteCurrency);

module.exports = router;
