const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


// initializing the APP.....
const app = express();

//connecting Mongo...
const databaseURL = ;
mongoose.connect(databaseURL,{useUnifiedTopology: true,useNewUrlParser: true})
.then(()=>{
    console.log('Database connected succesfully...')
}).catch((err)=>{
    console.log(err);
})

//setting up the view engine....
app.set("view engine","ejs");

//telling express where are we keeping our index.js...
app.set("views",__dirname+"/views");

//using body-parser...
app.use(bodyParser.urlencoded({extended:false}));
//using cookie parser...
app.use(cookieParser());

// setting up the primary route....(For login only(only student)... separate route for register) [BACKEND]
app.get('/',(req,res)=>{
    res.status(200).render("studLogin");
})

//login route for Admin...[FRONTEND]
app.get('/adminLogin',(req,res)=>{
    res.status(200).render("adminLogin");
})

/************ ACTUAL APP STARTS FROM HERE******************/

//Calling out various Api Endpoints....
const adminLogin = require('./api/login_office');
const studLogin = require('./api/login_stud');
const publicPost = require('./api/public_post');






//ADMIN SECTION....
app.use('/login_office',adminLogin);
app.use('/post',publicPost);

//STUDENT SECTION....
app.use('/login_stud',studLogin);

// starting the server..
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is up and running at port ${port}`);
})
