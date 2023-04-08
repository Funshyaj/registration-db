let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// person Model
let personSchema = require('../models/person');
// CREATE person
router.route('/add-person').post((req, res, next) => {
  personSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
      console.log(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

module.exports = router;