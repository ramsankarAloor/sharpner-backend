
const http = require('http')

const server = http.createServer( (req, res)=> {
    res.write('Ramsankar')
    res.end()
    console.log('RAMSANKAR')
})

server.listen(4000)