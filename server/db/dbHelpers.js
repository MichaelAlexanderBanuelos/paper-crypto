const db = require("./");

const dbHelpers = {
  getUser: (id, res) => {
    const qryStr = `SELECT * FROM Users INNER JOIN Bank ON Users.UserId = ${id} AND Users.UserId = Bank.UserId`;
    db.query(qryStr, (err, data) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};

module.exports = dbHelpers;
