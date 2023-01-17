const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
    description: String,
    username: String,
    imageFile: String,
    owner : {type: Schema.ObjectId, ref: "User" , required: true}
    // userProfile: String,
    // like: Number,
})

const PostModel = model('Post', PostSchema);

module.exports = PostModel