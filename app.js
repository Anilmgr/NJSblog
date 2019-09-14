const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

//Configure Mongoose to connect MongoDB
mongoose.connect('mongodb://localhost:27017/db_cms', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(Response =>{
        console.log("MongoDB connected successfully.");
    }).catch(err => {
    console.log("Error in establishing database connection!!");
});

// Configure express
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app
    ]
jhb  bvg   b  xxzgdjxgjhfxbmgv


    .engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine','handlebars');

// Routes
app.get('/',function (req,res){
    res.send("Hello World");
});


// Server
app.listen(3000, () => {
    console.log("Server started");
    });