var express = require('express');
var router = express.Router();
var User = require('../models/user')

var chris = new User({
    firstName: 'Chris',
    lastName: 'Herrera'
})
chris.save(function (err) {
    if(err) throw err

    console.log('Usuario guardado satisfactoriamente')
})

// get all the users
User.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
});

router.get('/', function(req, res, next) {
    res.render('index')
});
router.post('/', function(req, res, next) {
    var email = req.body.email
    var user = new User({
        firstName:'Rodrigo',
        lastName: 'Ibarra'
    })
    user.save(function (err) {
        if(err) throw err

        console.log('El usuario se ha guardado')
    })
    res.redirect('/')
});
module.exports = router;