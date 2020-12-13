var express = require("express");
var request = require("request");
var router = express.Router();
// const User = require("../schema/userSchema");
router.get("/", (req, res) => {
  res.send("Hi");
});
router.post("/", (req, res) => {
  var rollnumber = req.body.rollnumber;

  request(
    "http://proedge.me/test.php?rollnumber=" + rollnumber,
    // { uri: "http://proedge.me/test.php?rollnumber=123", method: GET },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send({ result: response.body, rollnumber: req.body.rollnumber }); // Show the HTML for the Google homepage.
      } else {
        console.log(error);
      }
    }
  );

  // res.send(req.body.data);
});

// router.post("/", (req, res) => {
//   var name = new User(req.body);
//   name.save().then((user) => {
//     res.send(user + "saved");
//   });
//   console.log(req.body.name);
// });

module.exports = router;
