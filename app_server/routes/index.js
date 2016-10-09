var express = require('express');
var router = express.Router();
var ctrlLogin = require('../controllers/login.js');
var ctrlNotes = require('../controllers/note.js');
var ctrlTitle = require('../controllers/title.js');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/', ctrlLogin.loginHome);
router.get('/note', ctrlNotes.noteEdit);
router.get('/title', ctrlTitle.titleEdit);


module.exports = router;
