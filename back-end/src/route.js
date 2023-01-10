const express = require('express');
const router = express.Router();
const { getPosts, createPost, getPost, deletePost, updatePost } = require('./controller/post-controller');
const { createUser, login } = require('./controller/user-controller');

router
    .get('/', (req, res) => { res.status('200').json({ message: 'alive' }) })
    .get('/posts', getPosts)
    .post('/posts', createPost)
    .get('/posts/:id', getPost)
    .patch('/posts/:id', updatePost)
    .delete('/posts/:id', deletePost)
    .post('/signup' , createUser)
    .post('/signin' , login)

module.exports = router