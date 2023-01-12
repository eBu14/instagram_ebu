const PostModel = require('../model/post-model');

exports.getPosts = async (req, res) => {
    // const posts = await PostModel.find();

    res.status('200').json('posts')
}

exports.createPost = async (req, res) => {
    try {
        // await PostModel.create(req.body)

        res.status('200').json({ message: 'success' })
    } catch (err) {
        res.status('400').json({ message: 'failed' })
    }
}

exports.getPost = async (req, res) => {
    const { id } = req.params;

    try {
        // const post = await PostModel.findById(id);

        // res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        // await PostModel.findByIdAndDelete(id);

        res.status(200).json('Deleted');
    } catch (err) {
        res.status(200).json('Not found');
    }
}

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        await PostModel.findByIdAndUpdate(id, req.body);

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }

}