/**
 * Created by sang on 01/06/14.
 */

var User = require('../model/user');
var jwt = require('jsonwebtoken')

// -- custom api

exports.api = {
  // auth
  auth: function (req, res, next) {
    console.info(req.body);

    User.one({ username: req.body.username }, function (err, user) {
      if (err) throw err;
      console.info(user);

      if (!user) {
        res.json({ success: false, message: '认证失败，用户名找不到' });
      } else if (user) {

        // 检查密码
        if (user.password != req.body.password) {
          res.json({ success: false, message: '认证失败，密码错误' });
        } else {
          // 创建token
          var token = jwt.sign(user, 'app.get(superSecret)', {
            'expiresInMinutes': 1440 // 设置过期时间
          });

          // json格式返回token
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      }
    });
  },
  list: function (req, res, next) {
    var user_id = req.api_user._id;

    User.query({}, function (err, users) {
      if (err) {
        return res.api_error(err);
      }

      res.api({
        users: users
      })
    });
  },
  show: function (req, res, next) {
    var user_id = req.api_user._id;
    var id = req.params.user_id;

    User.getById(id, function (err, user) {
      if (err) {
        return res.api_error(err);
      }

      res.api({
        user: user
      });
    });
  },
  create: function (req, res, next) {
    var user_id = req.api_user._id;

    User.create({ username: req.body.username, password: req.body.password, avatar: req.body.avatar, phone_number: req.body.phone_number, address: req.body.address }, function (err, user) {
      if (err) {
        return res.api_error(err);
      }

      res.json({
        user: user
      })
    });
  },
  update: function (req, res, next) {
    var user_id = req.api_user._id;
    var id = req.params.user_id;
    User.updateById(id, { username: req.body.username, password: req.body.password, avatar: req.body.avatar, phone_number: req.body.phone_number, address: req.body.address }, function (err, user) {
      if (err) {
        return res.api_error(err);
      }

      res.api({
        user: user,
        redirect: '/users/' + id
      })
    });
  },
  delete: function (req, res, next) {
    var user_id = req.api_user._id;
    var id = req.params.user_id;

    User.deleteById(id, function (err) {
      if (err) {
        return res.api_error(err);
      }

      res.api({ id: id })
    });
  }
}
