var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/form', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/form', (req, res) => {
  db.Form.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))

})

module.exports = router;
