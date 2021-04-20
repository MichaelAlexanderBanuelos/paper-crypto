const data = require("../dummyData.js");
const dbHelpers = require("./db/dbHelpers.js");
const apiHelpers = require("./apiHelpers.js");
const controller = {
  getUser: (req, res) => {
    dbHelpers.getUser(req.params.id, res);
  },
  getCryptos: (req, res) => {
    apiHelpers.getCryptos(req, res);
  },
};

module.exports = controller;
