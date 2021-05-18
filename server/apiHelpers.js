const axios = require("axios");
const API_KEY = require("../config/stockKey.js");

const config = {
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    useQueryString: true,
  },
};
let params = {
  params: {
    q: "tesla",
    region: "US",
  },
};

const apiHelpers = {
  getStocks: (req, res) => {
    axios
      .get(
        "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations/?symbol=INTC",
        config
      )
      .then((data) => {
        res.send(data.data);
      });
  },
};

module.exports = apiHelpers;
