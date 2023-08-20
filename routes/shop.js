const express = require("express");
const path = require('path');

const router = express.Router();

const sampleController = require('../controllers/sample')

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
});

router.get('/contactus', sampleController.getContact)

router.post('/success', sampleController.postSuccess)

module.exports = router;
