var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    function getBaseLog(x, y) {
      return Math.log(y) / Math.log(x);
    }
    let x = Math.floor(Math.random() * 10) + 1;
    let y = Math.pow(x, Math.floor(Math.random() * 3) + 2); 
    let result = getBaseLog(x, y);
    let response = `Base log of ${y} with base ${x} is ${result}`;
    res.send(response);
});

module.exports = router;
