const express = require("express");
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><br><input type="text" name="size" pattern=[0-9]*><br><button type="submit">Add product</button></form>'
  );
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
