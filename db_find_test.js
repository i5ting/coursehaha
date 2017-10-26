var db = require('./db')
var Course = require('./app/model/course')
// console.log(Course)

// db.once('open', function () {
//     var all = Course.all(function (err, users) {
//         console.log(users)
//     })
// })

db.once('open', function () {
    var course = Course.getById('59efc22cca69d2122ce75823',function (err, users) {
        console.log(users)
    })
})