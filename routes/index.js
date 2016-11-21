var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home - De Was Das' });
});

router.get('/wasstraat', function(req, res, next) {
  res.render('wasstraat', { title: 'Wasstraat - De Was Das' });
});

router.get('/poetsen', function(req, res, next) {
  res.render('poetsen', { title: 'Poetsen - De Was Das' });
});

router.get('/actie', function(req, res, next) {
  res.render('actie', { title: 'Actie - De Was Das' });
});

router.get('/vestigingen', function(req, res, next) {
  res.render('vestigingen', { title: 'Vestigingen - De Was Das' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - De Was Das' });
});

module.exports = router;
