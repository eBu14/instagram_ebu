let jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const { request, response } = require('express');
const User = require('../model/user-model')
exports.getUsers = async (req, res) => {

}
exports.login = async (req, response) => {

    const { userName, password } = req.body;
    const userData = await User.findOne({ userName })
    const salt = bcrypt.genSaltSync(1);
    const hashPassword = bcrypt.hashSync(password, salt)
    const token = jwt.sign(
        { userName: userName, password: password, role: userData.role },
        process.env.JWT_SECRET || "defaultSecret",
        { expiresIn: "1d" }
    )
    if (userData) {
        if (bcrypt.compareSync(password, userData.password)) {
            response
                .status(201)
                .json({ message: userName + "  Signed", data: userData, token: token })
        } else {
            response
                .status(400)
                .json({ message: "incorrect password" })
        }
    } else {
        response
            .status(400)
            .json({ message: "user not found" })
    }

}
exports.createUser = async (request, response) => {
    const salt = bcrypt.genSaltSync(1);
    const hashPassword = bcrypt.hashSync(request.body.password, salt)

    if (
        !request.body?.userName ||
        !request.body?.password
    ) {
        response
            .status(400)
            .json({ message: "username or password are required" })
    }

    const createUser = await User.create({ ...request.body, password: hashPassword });
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

exports.IsAdmin = async (req, res, next) => {
    const { token } = req.headers
    jwt.verify(
        token,
        process.env.JWT_SECRET || "defaultSecret",
        function (err, decoded) {
            if (err) {
                res.status(400).send('login hiigece');
                return;
            }
            if (decoded.role === "admin") {
                next();
                return
            }

        }

    )
}
exports.IsUser = async (req, res, next) => {
    const { token } = req.headers
    jwt.verify(
        token,
        process.env.JWT_SECRET || "defaultSecret",
        function (err, decoded) {
            if (err){
                res.status(400).send('login hiigece'); 
                return;
            }
            if (decoded.role === "user") {
                next();
                return
            }

        }

    )
}