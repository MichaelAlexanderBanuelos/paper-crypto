const axios = require("axios");
const API_KEY = require("../config/cryptoKey.js");

const config = {
  headers: {
    "X-CMC_PRO_API_KEY": API_KEY,
  },
};

const apiHelpers = {
  getCryptos: (req, res) => {
    axios
      .get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        config
      )
      .then((data) => {
        const cleanData = data.data.data.map((crypto) => ({
          name: crypto.name,
          symbol: crypto.symbol,
          price: crypto.quote.USD.price,
        }));
        res.send(cleanData);
      });
  },
};

module.exports = apiHelpers;
