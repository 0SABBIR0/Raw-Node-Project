/* 
 Uptime monitoring Application
 A restfull API to monitor up or down   time of user defined links
*/

//dependencies 
const http = require('http');

const {handleReqRes} = require('./helpers/handleReqRes')

//app object

const app = {};

//configaration
app.config = {
    port:3000,
};

//create server

app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to the port ${app.config.port} `);
    });
};

//Handle Request Response
app.handleReqRes = handleReqRes;

//Start The server
app.createServer();