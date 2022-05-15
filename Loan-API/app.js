var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/LoanManager");

var indexRouter = require(path.join(__dirname, './routes/index.js'));;
var usersRouter = require(path.join(__dirname, './routes/users.js'));
var customerRouter= require(path.join(__dirname, './routes/customer.js'));
var invoiceRouter = require(path.join(__dirname, './routes/invoices.js'));
var loanRouter = require(path.join(__dirname, './routes/loans.js'));
var paymentRouter= require(path.join(__dirname, './routes/payment.js'));
var settingsRouter = require(path.join(__dirname, './routes/settings.js'));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use( "/customer", customerRouter);
// app.use("/invoices", invoiceRouter);
// app.use("/loans", loanRouter);
// app.use("/payment", paymentRouter);
// app.use("/settings", settingsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
 });

module.exports = app;
