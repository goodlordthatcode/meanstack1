//app.js
//*
//* Application Server Startpoint
//*


// Node-Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// Require our other files
const config = require('./config/database');
const users = require('./routes/users');


//Database connection
//Test the connection
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
    console.log('connected to database ' + config.database);
});
//If error
mongoose.connection.on('error', (err)=>{
    console.log('database error ' + err);
});

//init Express
const app = express();

//Our Middleware setup
//Cors MiddleWare is used for accepting requests from other domains. Can also be done with express?
app.use(cors());
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
//Body parser MiddleWare, used for accepting data from forms etc
app.use(bodyParser.json());
// Any route with /users/ will redirect to the file users.
app.use('/users', users);


// Basic route for the homepage /. res with nothing here. Note: If we loose public folder this will default
app.get('/', (req, res)=>{
    res.send('Error grabbing website, please try again.');
});



//Port for the server
const port = 3000;
// Server startpoint, setting up a listen and outputing in console
app.listen(port, () => {
    console.log("Server started on port: " +port)
});