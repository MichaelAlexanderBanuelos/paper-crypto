const axios = require("axios");
const API_KEY = require("../config/stockKey.js");

const config = {
  headers: {
    "X-CMC_PRO_API_KEY": API_KEY,
  },
};

const apiHelpers = {
  getStocks: (req, res) => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
      )
      .then((data) => res.send(data));
  },
};

module.exports = apiHelpers;
