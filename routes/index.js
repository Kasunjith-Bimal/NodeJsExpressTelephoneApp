var express = require('express');
var router = express.Router();
var users;
var connection = require('../config/connection')
/* GET home page. */
router.get('/', function (req, res, next) {
  connection.query('select * from user', function (err, rows) {
    if (err) throw err
    res.render('index', { users: rows });

  })
 });
 router.post('/addUser', function (req, res, next) {
  
  const userdata ={
    UserName:req.body.UserName,
    UserAddress:req.body.UserAddress,
    UserEmail:req.body.UserEmail,
    UserTelephoneNumber:req.body.UserTelephoneNumber,
  }
  
  console.log(userdata)

  connection.query("INSERT INTO user SET ?",userdata, function (err, result) {
    if (err) throw err
    res.redirect('/');

  })

 });

 router.post('/search', function (req, res, next) {
  

  
  connection.query('SELECT * from user where UserName like "%'+req.body.search+'%"', function (err, rows) {
    if (err) throw err
    res.render('index', { users: rows });

  })

 });


 router.get('/delete/:UserId', function (req, res, next) {
  

  var UserreqId = req.params.UserId;

  connection.query("Delete from user where UserId =?",UserreqId, function (err, rows) {
    if (err) throw err
    res.redirect('/');

  })

 });
module.exports = router;
