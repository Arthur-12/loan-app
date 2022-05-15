var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

const customerModel = require("../models/customer.model");
/* GET all customers */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Create new customers. */
router.post('/add', function(req, res, next) {
  let customerObj = new customerModel({
    firstName: "Mark",
    lastName: "Samson",
    emailAddress: "kenechukwuaerthur12@gmail.com",
    number: "09030365845"
  })
  customerObj.save((err,customerObj)=>{
    if(err){
      res.send({status: 500, Message: "Unable to add customer "});
    }else{
      res.send({status:200, message: "User added successfully", customerDetails: customerObj});
    }
  })
  res.render('index', { title: 'Express' });
});
/*  update new customers. */
router.put('/update', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*  delete new customers. */
router.delete('/delete', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*  search existing customers. */
router.get('/search', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
