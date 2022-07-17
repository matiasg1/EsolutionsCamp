const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({       
  name: {
    required: true,
      unique: true,
      type: String, 
    },
  username: {
    required: true,
      unique: true,
      type: String, 
    },
  email: {
      required: true,
      unique: true,
      type: String, 
    },
  Company:{
       type: Schema.Types.ObjectId, 
       ref: "compModel"
      }
});

module.exports = mongoose.model("newUser", userSchema)    
