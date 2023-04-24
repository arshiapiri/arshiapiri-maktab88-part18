var express = require('express');
var router = express.Router();
const studentRouter = require("./student")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/student", studentRouter);

module.exports = router;
