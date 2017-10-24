/**
 * Created by alfred on July 1st 2015, 11:52:49 pm.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var MongooseDao = require('mongoosedao')

// 评价
// - 用户
// - 课程
// - 默认教学计划 
// - 完成进度:10/19   
// - 时间：2017-10-17
// - 评价分数

var evaluationSchema = new Schema({
  plan: String, //默认教学计划 
  process: String, //完成进度:10/19
  time: Date, //时间：2017-10-17
  number: Number, //评价分数
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }, //课程
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //用户(学生)
})

var evaluation = mongoose.model('Evaluation', evaluationSchema)
var evaluationDao = new MongooseDao(evaluation)

module.exports = evaluationDao