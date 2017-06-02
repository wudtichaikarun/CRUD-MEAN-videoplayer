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


//GET BY ID 
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


//POST METHOD FOR CREATE DATA
router.post('/video', function(req, res){
    console.log('Post a video by postman');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.discription = req.body.discription;
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log('Error saving video');
        }else{
            res.json(insertedVideo);
        }
    });
});

//PUT METHOD FOR UPDATE DATA
router.put('/video/:id', function(req, res){
   console.log('Update video by postman');
   Video.findByIdAndUpdate(req.params.id,
   {
       $set: {
           title: req.body.title,
           url: req.body.url, 
           discription: req.body.discription
        }
   },
   {
       new: true
   },
   function(err, updateVideo){
       if(err){
           res.send("Error update video");
       }else{
           res.json(updateVideo);
       }
   });
});

//DELETE METHOD
router.delete('/video/:id', function(req, res){
    console.log('Delete a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send('Error deleting video');
        }else{
            res.json(deletedVideo);
        }
    });
});

module.exports = router;