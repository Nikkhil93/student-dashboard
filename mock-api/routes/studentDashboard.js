// orderManagement.js - orderManagement route module

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
router.use(bodyParser.json());


router.all('/getAllStudents', function (req, res) {
  res.send([{
      "name": "rajiv",
      "marks": {
        "Maths": "18",
        "English": "21",
        "Science": "45"
      },
      "rollNumber": "KV2017-5A2"
    },
    {
      "name": "abhishek",
      "marks": {
        "Maths": "43",
        "English": "30",
        "Science": "37"
      },
      "rollNumber": "KV2017-5A1"
    },
    {
      "name": "zoya",
      "marks": {
        "Maths": "42",
        "English": "31",
        "Science": "50"
      },
      "rollNumber": "KV2017-5A3"
    }
  ]);
});

module.exports = router;