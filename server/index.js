let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('dotenv').config(); 
let Person = require('./models/person');

// Express Route
// const personRoute = require('./routes/person-routes');

// Connecting mongoDB Database
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo because', err.reason)
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());


// mount
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!, i love you" });
});

// func for adding person with .create()
var createPerson = (person)=> {
  Person.create(person, (err, person)=> {
    if (err) {
      if (err) return handleError(err);
    } else {
      console.log("uploaded")
  };
})};


// setting endpoint for posting user
app.post('/add-person' ,(req, res) => {
  let body = req.body
  createPerson(body)
});






  
// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})


// Error
app.use((err, req, res, next)=> {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});