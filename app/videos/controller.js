
const Video = require('./model');
const VideosController ={
    getAll(req, res){
        Video.find({})
            .exec(function(err, videos){
                if(err){
                    console.log("error retrieving videos");
                }else{
                    res.json(videos);          
                }
            });
    }
}

export default VideosController
