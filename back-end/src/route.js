let jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const { getPosts, createPost, getUserPost, deletePost, updatePost } = require('./controller/post-controller');
const { createUser, login } = require('./controller/user-controller');

const middleWare = (req, res, next) => {
    const { token } = req.headers
    console.log(token);
    jwt.verify(
        token,
        process.env.JWT_SECRET || "defaultSecret",
        function (err, decoded) {
            console.log(decoded) // bar
        }
    )
    next();
}

router
    .use(middleWare)
    .get('/', (req, res) => { res.status('200').json({ message: 'alive' }) })
    .get('/posts', getPosts)
    .post('/posts', createPost)
    .get('/UserPosts', getUserPost)
    .patch('/posts/:id', updatePost)
    .delete('/posts/:id', deletePost)
    .post('/signup', createUser)
    .post('/signin', login)

module.exports = router