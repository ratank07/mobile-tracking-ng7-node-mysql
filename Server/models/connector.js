const pool = require('./dbconnection');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

var resultsNotFound = {
    "errorCode": "0",
    "errorMessage": "Operation not successful.",
    "rowCount": "0",
    "data": ""
  };

  var resultsFound = {
    "errorCode": "1",
    "errorMessage": "Operation successful.",
    "rowCount": "1",
    "data": ""
  };

  module.exports = {
    createUser: function (req, res) {
      pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
  
        bcrypt.hash(req.body.inputPassword, saltRounds, function (err, hash) {
          var sql = 'INSERT INTO user SET ?';
          var values = { 'name': req.body.inputEmail, 'email': req.body.inputEmail, 'password': hash, 'createdAt': new Date(), 'updatedAt': new Date() }
          // Use the connection
          connection.query(sql, values, function (error, results, fields) {
            if (error) {
              resultsNotFound["errorMessage"] = "emailID already exists.";
              return res.send(resultsNotFound);
            } else return res.send(resultsFound);
  
            // When done with the connection, release it.
            connection.release(); // Handle error after the release.
            if (error) throw error; // Don't use the connection here, it has been returned to the pool.
          });
        });
      });
  }
}

  