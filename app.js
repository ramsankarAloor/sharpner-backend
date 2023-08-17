const express = require("express");

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use('/', (req, res, next)=>{ 
    res.status(404).send('<h1>Page not found!!</h1>')
})

// slash is the default route, we can actually omit that
//so the below code is equivalant to that code above

// app.use((req, res, next)=>{ 
//     res.status(404).send('<h1>Page not found!!</h1>')
// })


app.listen(4000);
