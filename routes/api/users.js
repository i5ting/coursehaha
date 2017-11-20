var express = require('express');
var router = express.Router();

var $ = require('../../app/controllers/users_controller')

// var $middlewares  = require('mount-middlewares')(__dirname);

// route define
router.post('/auth', $.api.auth);

router.get('/', $.api.list);

router.post('/', $.api.create);

router.get('/:user_id', $.api.show);

router.patch('/:user_id', $.api.update);

router.delete('/:user_id', $.api.delete);


module.exports = router;
