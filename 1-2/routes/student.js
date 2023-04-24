const  express = require('express');


const router = express.Router();

const { requestHandler } = require("../services/request")

/* GET students listing. */
router.get("/", function(req, res, next) {
  res.send( { result: []})
});


module.exports = router;