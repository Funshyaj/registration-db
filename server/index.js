let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const app = express();

// Express Route
const personRoute = require('./routes/person-routes');

// Connecting mongoDB Database
mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase')
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
app.use('/add-person', personRoute)

// mount
// app.get('/', (req, res) => {

//   })

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/client/build", "index.html"));
    // app.use(express.static(path.resolve(__dirname, "../client/build")));
  });

  
// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});