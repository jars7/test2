const express = require('express');
const bodyPraser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

app.get('/', (req, res)=> {
    res.send("hello world yo")
})

app.listen(8000);
