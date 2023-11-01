const express = require('express');
const ejs = require("ejs");
const  path = require("path");
const app = express();


//TEMPLATE ENGİNE
app.set("view engine","ejs");



//MIDDLEWARE
app.use(express.static('public'));


// ROUTES
app.get('/', (reg, res) => {
    res.render("index")
});

app.get('/about', (reg, res) => {
  res.render("about")
});

app.get('/add', (reg, res) => {
  res.render("add")
});

app.get('/post', (reg, res) => {
  res.render("post")
});

const port = 3001;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..     `);
});
