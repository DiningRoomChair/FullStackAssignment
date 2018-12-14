const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// *********** Include the Api routes ***********

// *********** Connect to Mongo  ***********
console.log('Attempting to connect to mongoose');

mongoose.connect('mongodb://admin:password123@ds063439.mlab.com:63439/comp3123a1',
{useNewUrlParser: true})
.then(()=>{
    console.log('yuurr');
}).catch(err => {
    console.log('DB failed to connect', err.stack);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  next();
});

// ******** Setup the Api routes ***********
const studentRoutes = require("./routes/students");
const userRoutes = require("./routes/user_route");
const adminRoutes = require("./routes/admin_route");
const videoRoutes = require("./routes/video_route");

app.use("/api/students", studentRoutes);
app.use("/api/user_route", userRoutes);
app.use("/api/admin_route", adminRoutes);
app.use("/api/video_route", videoRoutes);

module.exports = app;
