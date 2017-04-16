const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../models/user");






//Register endpoint
router.post('/register', (req, res, next)=> {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: "Registration failed"});
        } else {
            res.json({success: true, msg: "User Created " + user.name});
        }

    })
});

//Authentication endpoint
router.post('/authenticate', (req, res, next)=> {
    res.send('Authenticate page');
});

//Profile endpoint
router.get('/profile', (req, res, next)=> {
    res.send('RESTRICTED: Profile page');
});




// Needs to export the router
module.exports = router;