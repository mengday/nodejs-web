var express = require('express');
var router = express.Router();

var debug = require('debug')('nodejs-web:index');

/* GET home page. */
router.get('/', function(req, res, next) {
  debug('=========' + express().get('env'))
  res.render('index', { title: 'Express' });
});

module.exports = router;
