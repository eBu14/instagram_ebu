const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();
const router = express.Router();
const { getPosts, createPost, getPost, deletePost, updatePost } = require('./controller/post-controller');
const { logIn } = require('./controller/user-controller');

const middleWare = (req, res, next) => {
    const { token } = req.headers

    jwt.verify(token, 'password', (err, result) => {
        if (result)
            next();
    })
}

router
    .use(middleWare)
    .get('/', (req, res) => { res.status('200').json({ message: 'alive' }) })
    .get('/posts', getPosts)
    .post('/login', logIn)
    .post('/posts', createPost)
    .get('/posts/:id', getPost)
    .patch('/posts/:id', updatePost)
    .delete('/posts/:id', deletePost)

module.exports = router