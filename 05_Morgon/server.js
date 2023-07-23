const express = require('express');
const morgan = require('morgan')

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (reg, res) => {
    res.send("Hello")
});

app.listen(port, () => {
    console.log('Listening on port localhost:'+port);
});
