var express = require('express');
var router = express.Router();

const nameList = [
{'id':1, 'name':'Rahul', 'desc':'First record'},
{'id':2, 'name':'Prem','desc':'Second record'},
{'id':50, 'name':'Vijay','desc':'Fiftieth record'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub:'Software Deployment and Operations', names: nameList});
});

module.exports = router;
