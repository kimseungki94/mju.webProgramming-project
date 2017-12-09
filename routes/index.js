var express = require('express'); //var인걸 const로 변경 (내가 임의로)
var router = express.Router();

var countries = [
  "korea","south-Africa","Alberia","Angola","japan","china","America","Russia","Brazil"
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/suggest',(req,res,next) => {
  let q = req.query.q ? req.query.q.toLowerCase() : '';

  if(!q) {
    return res.json([]);
  }

  res.json(countries.filter(name => {
    return name.toLowerCase().indexOf(q) > -1;
  }));
});
module.exports = router;
