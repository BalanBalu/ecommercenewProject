const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const mongoose = require('mongoose')
const userRoutes= require('./routes/user')
mongoose.connect('mongodb+srv://balankottiyattil:'+process.env.MONGO_ATLAS_PW+'@ecommerceproject-pn3ry.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true })
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/user',userRoutes)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
  
  // Routes which should handle requests
  app.use("/user", userRoutes);
  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
  
  module.exports = app;