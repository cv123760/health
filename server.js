const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const https = require("https");
const mongoose = require("mongoose");
const { link } = require("fs");
const { getMaxListeners } = require("process");

const login = {
    email: "cv123760@gmail.com",
    password: "secret"
}

// link to mongoDB
mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true})


// use public folder for static files
app.use(express.static("public"))


app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
});


// Login POST 
app.post("/", function(req, res){
    const email = req.body.email
    const password = req.body.password

    
    // check username and password
    if (email === login.email && password === login.password) {
    
        res.sendFile(__dirname+"/public/main.html")
    }else {
        console.log("invalid log in")
        res.redirect("/")
    }


});



// javascript files and css photos
app.get("/diet", function(req, res){
    res.sendFile(__dirname+"/diet.js")
});
app.get("/food", function(req, res){
    res.sendFile(__dirname+"/food.js")
});
app.get("/prep", function(req, res){
    res.sendFile(__dirname+"/prep.js")
});
app.get("/intervals", function(req, res){
    res.sendFile(__dirname+"/intervals.js")
});




// port numnber
app.listen(process.env.PORT || '3000', function(){
    console.log("server is running")
});
