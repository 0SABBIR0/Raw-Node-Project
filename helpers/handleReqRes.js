//Defendencies 
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHander/notFoundHandler');


//Module Scaffolding
const handler = {};

handler.handleReqRes =  (req, res) => {
    //reqest handling
    //get the url and parse it
    const parseUrl = url.parse(req.url, true)
    const path = parseUrl.path;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queuryStringObject = parseUrl.query;
    const headersObject = req.headers; 

    const requestProperties  = {
        parseUrl,   
        path,
        trimmedPath,
        method,
        queuryStringObject,
        headersObject
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const choosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    choosenHandler(requestProperties, (statusCode, payload) =>{
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};
        
        const payloadString  = JSON.stringify(payload);
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data' , (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        //Response Handle
        res.end('Hello Programmers');
    });
};


module.exports = handler;