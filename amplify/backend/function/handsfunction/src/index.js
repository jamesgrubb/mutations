const fetch = require('node-fetch')

exports.handler = async (event) => {
console.log(event)

    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*"
     }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
