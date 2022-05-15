const mongoose = require("mongoose");
const loanSchema = mongoose.Schema({
  loanName: String,
  loanType:String,
  loanStatus:String,
  loanAmount:Number,
  loanIssueDate:Date
});

const  loanModel = mongoose.model("Loan", loanSchema);
module.exports = loanModel