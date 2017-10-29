var express = require('express');
var router = express.Router();

var Course = require('../app/model/course');

/* GET home page. */
router.get('/', function (req, res, next) {
  Course.all(function (err, courses) {
    console.log(courses)
    res.render('index', { 
      title: 'Express',
      courses:courses
    });
  })
});

module.exports = router;
