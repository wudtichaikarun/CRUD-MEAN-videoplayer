
const Video = require('./model');
const VideosController ={
    // GET video by id
    get(req, res){
        Video.findById(req.params.id)
            .exec(function(err, video){
                if(err){
                    console.log("error retrieving video");
                }else{
                    res.json(video);
                }
            });
    },
    // GET all videos
    getAll(req, res){
        Video.find()
            .exec(function(err, videos){
                if(err){
                    console.log("error retrieving videos");
                }else{
                    res.json(videos);          
                }
            });
    },
    //POST create video
    create(req, res){
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
    },
    //PUT update video
    update(req, res){
        Video.findByIdAndUpdate(req.params.id,{
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

    },
    // DELETE delete video
    destroy(req, res){
        Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
            if(err){
                res.send('Error deleting video');
            }else{
                res.json(deletedVideo);
            }
        });
    }
}

export default VideosController
