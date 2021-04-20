const data = require("../dummyData.js");
const dbHelpers = require("./db/dbHelpers.js");

const controller = {
  getUser: (req, res) => {
    dbHelpers.getUser(req.params.id, res);
  },
};

module.exports = controller;
