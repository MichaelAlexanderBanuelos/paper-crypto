const db = require("./");

const dbHelpers = {
  getUser: (req, res) => {
    qryStr = "SELECT * FROM Users";
    db.query(qryStr, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};

module.exports = dbHelpers;
