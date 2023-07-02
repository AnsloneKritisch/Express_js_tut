const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// this gonna post the data to the server but it will not get data from the form 
// app.post('/', (req, res) => {
//     res.send("thanks for posting ");
// });

//  to get data from the form we need body paser 
// install npm install body-parser

app.post('/', (req, res) => {
    
    // it will help to print all the data given by the user 
    // console.log(req.body) ;

    // it will help to print only the data given by the user at num1 
    // console.log(req.body.num1) ;

    // now creating two variables to store the data using body.paser

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2 ;

    console.log(result) ;


    res.send("The sum is = "+result) ;

});

app.listen(3000 , function () {
    
    console.log("server is running on port 3000")
});