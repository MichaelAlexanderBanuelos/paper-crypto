const data = require("../dummyData.js");

const controller = {
  getUser: (req, res) => {
    res.send(data);
  },
};

module.exports = controller;
