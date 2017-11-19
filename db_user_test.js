require('./db')

var User = require('./app/model/user')
// console.log(Course)

User.create({
    username: "i5ting",
    password: "000000",
}, function (err) {
    console.log(err)
})

User.create({
    username: "alfred",
    password: "000000",
}, function (err) {
    console.log(err)
})
