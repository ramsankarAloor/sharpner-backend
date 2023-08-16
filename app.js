const http = require("http");
const { parse } = require("path");

const routes = require('./routes') 

const server = http.createServer(routes.handler);  //'routes'

server.listen(4000);
