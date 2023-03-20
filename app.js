const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use('/static', express.static('static'));
app.use(express.urlencoded());

var engines = require('consolidate');
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', engines.mustache);

app.get('/', (req,res) =>{
    res.render('home.html');
})
app.get('/customers', (req,res) =>{
    res.render('customers.html');
})

app.post("/customers" , function(req,res){
    res.redirect("/");
})

app.listen(port, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});