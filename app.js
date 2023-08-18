const express = require("express");

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{ 
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

// slash is the default route, we can actually omit that
//so the below code is equivalant to that code above

// app.use((req, res, next)=>{ 
//     res.status(404).send('<h1>Page not found!!</h1>')
// })


app.listen(4000);
