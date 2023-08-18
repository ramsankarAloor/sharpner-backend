const express = require("express");
const path = require('path');

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
});

router.get('/contactus', (req, res, next)=>{
  res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
})

router.post('/success', (req, res, next)=>{
  res.send('<h2>Form sent successfully..</h2>')
})

module.exports = router;
