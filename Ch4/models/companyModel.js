const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({     
 name:{
   required: true,
   type: String,
   unique: true 
  },
 companyUsers:[{
   required: true,
   type: Schema.Types.ObjectId,
   ref: "newUser"
 }]
});

module.exports = mongoose.model("compModel", companySchema)    