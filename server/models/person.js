const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let personSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  sex: {
    type: String
  }
}, {
    collection: 'persons'
  })

  
let Person = mongoose.model("Person", personSchema);
module.exports = Person