var express = require('express');
var router = express.Router();

var Course = require('../../app/model/course')
// console.log(Course)

/* GET users listing. */
router.get('/', function(req, res, next) {
  var all = Course.all(function (err, users) {
    console.log(users)
    res.json({
      data: {
        users: users
      },
      status: {
        code:0,
        msg: "sucess"
      }
    })
  })
});

/* GET user detail. */
router.get('/:id', function(req, res, next) {
  res.json({
    a:1
  });
});

/* POST create user */
router.post('/', function(req, res, next) {
  res.json({
    a:1
  });
});

module.exports = router;
