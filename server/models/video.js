const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: String,
    url: String,
    discription: String
});

module.exports = mongoose.model('Video', videoSchema, 'videos');