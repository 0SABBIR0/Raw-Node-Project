/* 
 Uptime monitoring Application
 A restfull API to monitor up or down   time of user defined links
*/

//dependencies 
const http = require('http');
const url = require('url');

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
app.handleReqRes = (req, res) => {
    //reqest handling
    //get the url and parse it
    const parseUrl = url.parse(req.url, true)
    const path = parseUrl.path;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queuryStringObject = parseUrl.query;
    console.log(queuryStringObject);
    //response handle
    res.end('Hello Mothafucka');
};

//Start The server
app.createServer();