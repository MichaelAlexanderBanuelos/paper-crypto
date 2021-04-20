const db = require("./");

const dbHelpers = {
  getUser: (id, res) => {
    const qryStr = `SELECT * FROM Users WHERE Users.UserId = ${id}`;
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
