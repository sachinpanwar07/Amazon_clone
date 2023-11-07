const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');
const { error } = require('console');

mongoose.connect(
  'mongodb+srv://sachinpanwar:sachinpanwar@cluster0.asougjs.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(()=>{
    console.log("Connected ")
}).catch((error)=>{
    console.log("Error connecting to MongoDb",error)

})
app.listen(port,()=>{
    console.log("Server is running on port 8000")
})
