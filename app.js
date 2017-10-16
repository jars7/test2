const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// static folder
app.use('/public',express.static(path.join(__dirname, 'public')));


// Body Parser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//routes

app.get('/', (req, res)=> {
    res.render('contact');
})

app.post('/send', (req, res) => {
    console.log(req.body);
    res.render('contact', {msg:'Email has been sent'});
}
);

app.listen(8000,()=>{console.log("server started")});
