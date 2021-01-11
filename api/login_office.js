const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());



//setting up the api endpoint....
//calling api for Admin login...
router.post('/login_official',(req,res)=>{
    const username = req.body.username_admin;
    const password = req.body.password_admin;
    if(username=='root' && password=='123'){
        res.render("admin_dashboard");
    }
    else{
        res.send('Wrong Password! Login Denied!')
    }
  })
  
  
  
  module.exports = router;