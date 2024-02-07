// currencyController.js

// Sample data representing currencies
let currencies = [
    {
      id: 1,
      currencyCode: "CDN",
      country: "Canada",
      conversionRate: 1
    },
    {
      id: 2,
      currencyCode: "USD",
      country: "United States of America",
      conversionRate: 0.75
    }
  ];
  
  // Controller functions for handling currency-related operations
  const currencyController = {
    // Get all currencies
    getAllCurrencies: (req, res) => {
      res.json(currencies);
    },
  
    // Get a specific currency by ID
    getCurrencyById: (req, res) => {
      const currencyId = parseInt(req.params.id);
      const currency = currencies.find(c => c.id === currencyId);
      if (currency) {
        res.json(currency);
      } else {
        res.status(404).json({ error: 'Currency not found' });
      }
    },
  
    // Create a new currency
    createCurrency: (req, res) => {
      const newCurrency = req.body;
      if (!newCurrency.currencyCode || !newCurrency.country || !newCurrency.conversionRate) {
        res.status(400).json({ error: 'Content missing' });
      } else {
        newCurrency.id = currencies.length + 1;
        currencies.push(newCurrency);
        res.status(201).json(newCurrency);
      }
    },
  
    // Update the conversion rate of a currency by ID
    updateCurrencyRate: (req, res) => {
      const currencyId = parseInt(req.params.id);
      const newRate = parseFloat(req.body.newRate);
      const currencyIndex = currencies.findIndex(c => c.id === currencyId);
      if (currencyIndex !== -1) {
        currencies[currencyIndex].conversionRate = newRate;
        res.json(currencies[currencyIndex]);
      } else {
        res.status(404).json({ error: 'Currency not found' });
      }
    },
  
    // Delete a currency by ID
    deleteCurrency: (req, res) => {
      const currencyId = parseInt(req.params.id);
      const initialLength = currencies.length;
      currencies = currencies.filter(currency => currency.id !== currencyId);
      if (currencies.length < initialLength) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Currency not found' });
      }
    }
  };
  
  module.exports = currencyController;
  