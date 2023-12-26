require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const bodyParser = require('body-parser');
import cookieParser from "cookie-parser";
import Auth from './routes/auth.js';

const mongoString = process.env.CONNURL;

mongoose.connect(mongoString, 
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
    console.log("Connection to MongoDB created");
  })
.catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);
app.use('/api/auth', Auth);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//select an available port
const port = process.env.PORT
app.listen(port, () => {
    console.log("Server started at port " + port + "");
});