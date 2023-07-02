const express = require('express')
const app = express()

// first para id route , in funtion i wrote respose that's why i am writing response.send , we can change both place

// "/" -> homepage 

// Home
app.get('/', function(request , response )
{
    response.send("<h1>Hello World</h1>");

});


// contact
app.get('/contact', function(request , response )
{
    response.send("<h1>Contact Me at Wendigos@.com </h1>");

});



app.listen(3000 , function() 
{
    console.log("server is running on port 3000") ;
    
}) ;

// nodemon server.js -> After installing node-nodemon 