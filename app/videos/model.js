
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const db = "mongodb://ro:1234@ds161041.mlab.com:61041/videoplayer";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error!!!!" + err);
    }
});

const videoSchema = new Schema({
    title: String,
    url: String,
    discription: String
});

module.exports = mongoose.model('Video', videoSchema);