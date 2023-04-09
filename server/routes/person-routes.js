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
  personSchema.create(req.body).then((result)=>{
    console.log("created :" + result)
  })
  .catch((err) => {
    console.log(err.message)
    console.log('couldnt create')
  });

});

// Handle GET requests to /api route
router.route("/api").get((req, res) => {
  res.json({ message: "Hello from server!, i love you" });
});


module.exports = router;