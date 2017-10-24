/**
 * Created by alfred on July 1st 2015, 11:52:49 pm.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var MongooseDao = require('mongoosedao')

// 笔记
// - 用户：chenjielin
// - 时间：26天前 
// - 标签 作业

var noteSchema = new Schema({
  content: String, //笔记内容
  time: Date, //时间：26天前 
  tag: String, //标签 作业
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }, //课程
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //用户(学生)
})

var note = mongoose.model('Note', noteSchema)
var noteDao = new MongooseDao(note)

module.exports = noteDao