import mongoose from 'mongoose' ;    //const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = "mongodb://ro:1234@ds161041.mlab.com:61041/videoplayer";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error!!!!" + err);
    }else{
        console.log("connect to database")
    }
});

const videoSchema = new Schema({
    title: String,
    url: String,
    discription: String
});

module.exports = mongoose.model('Video', videoSchema, 'videos');

const Model = {
    findAll() {
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

export default Model