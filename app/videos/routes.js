// impconst express = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('./model');

const db = "mongodb://ro:1234@ds161041.mlab.com:61041/videoplayer";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error!!!!" + err);
    }
});

//GET ALL DATA
router.get('/videos', function(req, res){
    //console.log('Get request for all video');

    Video.find({})
    .exec(function(err, videos){
        if(err){
            console.log("error retrieving videos");
        }else{
            res.json(videos);          
        }
    });
});

module.exports = router;