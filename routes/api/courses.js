var express = require('express');
var router = express.Router();

var Course = require('../../app/model/course')
// console.log(Course)

/* GET users listing. */
router.get('/', function (req, res, next) {
  Course.all(function (err, courses) {
    console.log(courses)
    res.json({
      data: {
        courses: courses
      },
      status: {
        code: 0,
        msg: "sucess"
      }
    })
  })
});

/* GET user detail. */
router.get('/:id', function (req, res, next) {
  var user_id = req.params.id
  Course.getById(user_id, function (err, course) {
    console.log(course)
    res.json({
      data: {
        course: course
      },
      status: {
        code: 0,
        msg: "sucess"
      }
    })
  })
});

/* POST create user */
router.post('/', function (req, res, next) {
  Course.create({
      name: req.body.name || "系统掌握深度学习，从入门到精通实战", //课程名称
      category: req.body.category || "/首页/人工智能/系统掌握深度学习",
      price:req.body.price ||  2999, //价格
      picture: req.body.picture || "https://new.stuq.org/files/default/2017/08-08/120213522984724939.jpg" ,//头图
      status: req.body.status || "更新中", //状态标签：更新中、直播课程、不可用
      plan: req.body.plan || "教学计划：系统掌握深度学习，从...", //教学计划：系统掌握深度学习，从...
      effect_duration:req.body.effect_duration ||  "学习有效期：365 天（随到随学）", //学习有效期：365 天（随到随学）
      prompt: req.body.prompt || "课程原价 4999 元，现在限名额优惠，报名请尽快扫码咨询课程小助手", //课程提示： 课程原价 4999 元...
      target:req.body.target ||  "让学员掌握机器学习、深度学习基本原理", //课程目标
      target_user:req.body.target_user ||  "有一定编程基础，对深度学习有浓厚兴趣", //适合人群
  },function(err, course){
    res.json({
      data: {
        course: course
      },
      status: {
        code: 0,
        msg: "sucess"
      }
    })
  })
});

/* POST create user */
router.delete('/:id', function (req, res, next) {
  Course.deleteById(req.params.id,function(err, course){
    res.json({
      data: {
        // course: course
      },
      status: {
        code: 0,
        msg: "sucess"
      }
    })
  })
});

module.exports = router;