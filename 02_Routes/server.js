const express = require('express')
const app = express()


//  we start the server and we can't see anything in the server bacuse i didn't provided any details to show in the server 

// we will add data to app. generate a response to a request and thats why we give two parameters request and response

app.get('/', function(request , response )
{
    response.send("<h1>Hello World</h1>");

});


app.listen(3000 , function() 
{
    console.log("server is running on port 3000") ;
    
}) ;

