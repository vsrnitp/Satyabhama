const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());


//bringing out the post model.....
const {publicPostModel} = require('../models/public_post');

//setting up the api endpoint....
//calling api for stuent login...
router.post('/login_student',(req,res)=>{
    const username = req.body.username_student;
    const password = req.body.password_student;
    if(username=='student' && password=='123'){
    //retriving data from the database..
    publicPostModel.find().sort({_id:-1}).then(data=>res.status(200).render("student_dashboard",{dataLoad:data}));
    }
    else{
        res.send('Wrong Password! Login Denied!')
    }
  })
  
  
  
  module.exports = router;