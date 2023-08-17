
const express = require('express');

const app = express();

app.use( (req, res, next) => {
    console.log('In the middleware..')
    next()
})

app.use( (req, res, next) => {
    console.log('In another middleware..')
    res.send({ key1: "value" })
    // res.send('Hello guys!!')
})


// const server = http.createServer(app);  

// server.listen(4000);
//instead of the two lines above, we can use;

app.listen(4000);