/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const http = require('http');
const routes = require('./route');

console.log(routes.someText);

const server = http.createServer(routes.handler);


server.listen(3000);
//node app.js => start script => parse code, register variables & functions => event loop(keeps on running as long as there are event listeners registered)

