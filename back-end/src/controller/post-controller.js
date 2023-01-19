let jwt = require('jsonwebtoken')
const { response } = require('express');
const PostModel = require('../model/post-model');
const { findOne } = require('../model/post-model');

exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();
    if (!req.body.userName) {
        return res.status(400).json({ message: "Please login" })
    }
    res.status(200).json({ data: posts })
}

exports.createPost = async (request, response) => {
    if (
        !request.body.userName ||
        !request.body.imageFile ||
        !request.body.description
    ) {
        return response.status(400).json({ message: "description or image required" })
    }
    const { userName } = request.body.userName;
    const userData = await PostModel.findOne({ userName })
    const owner = userData._id
    const createPost = await PostModel.create(request.body, owner)
    response
        .status(201)
        .json({ message: "new image posted", data: createPost })
}

exports.getUserPost = async (req, res) => {
    const userName = req.body.userName
    const userPost = await PostModel.find({ userName });

    console.log(userName)

    if (req.body.userName) {
        return res.status(400).json({ message: "Please login" })
    }
    res.status(200).json({ data: userPost })

}

exports.deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        await PostModel.findByIdAndDelete(id);

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
