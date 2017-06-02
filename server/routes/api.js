const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://ro:1234@ds161041.mlab.com:61041/videoplayer";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error!!!!" + err);
    }
});

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

router.get('/videos/:id', function(req, res){
    //console.log('Get request for a single video');
    Video.findById(req.params.id)
    .exec(function(err, video){
        if(err){
            console.log("error retrieving video");
        }else{
            res.json(video);
        }
    });
});

module.exports = router;