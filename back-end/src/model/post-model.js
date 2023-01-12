const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
    description: String,
    userName: String,
    imageFile: String
    // userProfile: String,
    // like: Number,
})

const PostModel = model('Post', PostSchema);

module.exports = PostModel