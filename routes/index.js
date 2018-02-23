var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
var toRender = (config.kidsmode) ? 'main_kids' : 'home';


router.get('/', function(req, res, next) {
  res.render('home', { title: 'Done yet?', message : "handlebars is awesome", mainpage : true });
});

module.exports = router;
