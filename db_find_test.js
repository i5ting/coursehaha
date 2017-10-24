var db = require('./db')
var Course = require('./app/model/course')
// console.log(Course)

db.once('open', function () {
    var all = Course.all(function (err, users) {
        console.log(users)
    })
})