const path = require('path');

exports.postSuccess = (req, res, next)=>{
    res.send('<h2>Form sent successfully..</h2>')
  }

exports.getContact = (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
  }