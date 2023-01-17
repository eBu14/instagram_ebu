let jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const { request, response } = require('express');
const User = require('../model/user-model')
exports.getUsers = async (req, res) => {

}
exports.login = async (req, response) => {

    const { username, password } = req.body;
    const userData = await User.findOne({ username })
    const salt = bcrypt.genSaltSync(1);
    const hashPassword = bcrypt.hashSync(password ,salt)
    const token = jwt.sign(
        { username: username, password: password },
        process.env.JWT_SECRET || "defaultSecret",
        { expiresIn: "1d" }
    )
    if(userData) {  
        if (bcrypt.compareSync(password , userData.password)) {
        response
            .status(201)
            .json({ message: username + "  Signed", data: userData, token: token })
         } else {
        response
            .status(400)
            .json({ message: "incorrect password" })
        }
    }  else {
    response
        .status(400)
        .json({message: "user not found" })
    }
 
}
exports.createUser = async (request, response) => {
    const salt = bcrypt.genSaltSync(1);
    const hashPassword = bcrypt.hashSync(request.body.password ,salt)
   
    if (
        !request.body?.username ||
        !request.body?.password
    ) {
        response
            .status(400)
            .json({ message: "username or password are required" })
    }

    const createUser = await User.create({ ...request.body, password: hashPassword});
    response
        .status(201)
        .json({ message: "New user is created", data: createUser })
}

exports.getUser = async (req, res) => {
}


exports.deleteUser = async (req, res) => {
}

exports.updateUser = async (req, res) => {
}