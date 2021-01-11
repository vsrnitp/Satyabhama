const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//middlewares...
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());


//bringing out the post model.....
const {publicPostModel} = require('../models/public_post');

//setting up the api endpoint....
//calling api for public post...
router.post('/public',(req,res)=>{
    const postTitle = req.body.postTitle;
    const postContent = req.body.post_content;
    
    var postData = new publicPostModel({
        tittle:postTitle,
        post:postContent
    });

    //saving data to the database..
    postData.save((err,doc)=>{
        if(err) res.send(err);
        else res.render("successPageAfterPost");
    })
  })
  
  
  
  module.exports = router;