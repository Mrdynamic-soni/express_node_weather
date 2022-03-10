const express = require("express");
const path = require("path");
const hbs = require('hbs')
;const { partials } = require("handlebars");
const app = express();

const port = process.env.PORT || 8000; // forlocal and cloud port both
// public static path

//use=ing template engine
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path)
app.use(express.static(static_path));


app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("/weather",(req,res)=>{
    res.render('weather');
});
app.get("/contact",(req,res)=>{
    res.render('contact');
});

app.get("*",(req,res)=>{
    res.render('error');
});

app.listen(port,()=>{
    console.log("Server is running and listening to the port 8000");
});