var express = require('express');
var router = express.Router();
var connection = require('../config/connection')
/* GET home page. */
router.get('/', function (req, res, next) {
  connection.query('select * from user', function (err, rows) {
    if (err) throw err
    res.render('index', { users: rows });

  })
 });

module.exports = router;
