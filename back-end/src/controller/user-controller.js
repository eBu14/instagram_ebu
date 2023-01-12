const { request, response } = require('express');
const User = require('../model/user-model')
exports.getUsers = async (req, res) => {

}
exports.login = async (req, response) => {
    const { username, password } = req.body;
    const userData = await User.findOne({ username })
    if (userData.password === password) {
        response
            .status(201)
            .json({ message: username + "  Signed", data: userData })
    } else {
        response
            .status(400)
            .json({ message: "user not found" })
    }
}
exports.createUser = async (request, response) => {
    if (
        !request.body?.username ||
        !request.body?.password
    ) {
        response
            .status(400)
            .json({ message: "username or password are required" })
    }
    const createUser = await User.create({ ...request.body });
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