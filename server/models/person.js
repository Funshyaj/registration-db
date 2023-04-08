const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let personSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
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
module.exports = mongoose.model('person', personSchema)