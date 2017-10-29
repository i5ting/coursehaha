var express = require('express');
var router = express.Router();

var Course = require('../app/model/course');

/* GET home page. */
router.get('/', function (req, res, next) {
  var num = req.query.num ? req.query.num : 2

  Course.top(num, function (err, courses) {
    if (courses.length % 2 === 1){
      // 移除最后一个
      courses.pop()
    }
    console.log(courses)
    res.render('index_v2', { 
      title: 'Express',
      show_mode: true,
      courses:courses
    });
  })
});

/* GET list page. */
router.get('/list', function (req, res, next) {
  Course.all(function (err, courses) {
    console.log(courses)
    res.render('index_v2', { 
      title: 'Express',
      show_mode: false,
      courses:courses
    });
  })
});

/* GET static list page. */
router.get('/static/list', function (req, res, next) {
  Course.all(function (err, courses) {
    console.log(courses)
    res.render('static_list', { 
      title: 'Express',
      courses:courses
    });
  })
});

/* GET course detail page. */
router.get('/courses/:id', function (req, res, next) {
  var cid = req.params.id
  Course.getById(cid, function (err, course) {
    console.log(course)
    res.render('detail', { 
      course: course
    });
  })
});

module.exports = router;
