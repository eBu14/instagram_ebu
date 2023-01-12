const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
    description: String,
    userName: String,
    // userProfile: String,
    // like: Number,
    images: String
})

const PostModel = model('Post', PostSchema);

module.exports = PostModel