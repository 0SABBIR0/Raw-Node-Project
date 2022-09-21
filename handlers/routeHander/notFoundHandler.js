/*Not Found  Handler */


//module scaffholding

const handler = {};
handler.notFoundHandler = (requestProperties, callback) =>{
    callback(404, {
        message:'Your Requested url not found',
    });
};

module.exports = handler;