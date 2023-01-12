const { model, Schema } = require('mongoose');
const { post } = require('../route');

const PostSchema = new Schema({
    description: String,
    userId: String,
    userName: {
        type: String,
        required: [true, 'userName is required'],
    },
    userProfile: String,
    like: {
        type: Number,
        default: 0
    },
    images: [String]
})

const PostModel = model('Post', PostSchema);

module.exports = PostModel