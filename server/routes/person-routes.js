  express = require('express');
  const app = express();
  let bodyParser = require('body-parser');
  router = express.Router();
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// person Model
let personSchema = require('../models/person');

// CREATE person
router.route('/add-person').post((req, res, next) => {
  personSchema.create(req.body).then(result=>{
    console.log("created :" + result)
    res.json(result)
  })
  .catch((err) => {
    console.log('couldnt create because')
    console.log(err.message)
     res.json(err.message) 
  });

});

// READ person
router.route('/get-people').get((req, res) => {
   personSchema.find({}).then(result=>{
    console.log("received :" + result)
    res.json(result)
  })
  .catch((err) => {
    console.log('couldnt receive because')
    console.log(err.message)
   res.json(err.message) 
   
  });
  });


// Update person
router.route('/update-person/:id').put((req, res, next) => {
  personSchema.findByIdAndUpdate(req.params.id,{$set: req.body}).then(result=> res.json(result))
.catch(err=> {
  res.json(err.message)
console.log(err.message)
})
}) 


  // Delete person
router.route('/delete-person/:id').delete((req, res, next) => {
  personSchema.findByIdAndRemove(req.params.id).then(result=>{
   console.log("deleted :" + result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err.message)
      console.log('couldnt delete')
    });
})



// Handle GET requests to /api route
// this is just for testing
router.route("/api").get((req, res) => {
  res.json({ message: "Hello from server!, i love you" });
});


module.exports = router;