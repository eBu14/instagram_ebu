const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();
const UserModel = require('../model/user-model');

exports.getUsers = async (req, res) => {
}

exports.createUser = async (req, res) => {
}

exports.getUser = async (req, res) => {
}
exports.logIn = async (req, res) => {
    const { email, password } = req.body;

    const token = jwt.sign(
        { email, password },
        'password',
        { expiresIn: '1d' }
    )

    res.status(200).json(token)

    // const user = await UserModel.findOne({ email });

    // if (user.password === password) {
    //     const token = jwt.sign()
    //     res.send(token);
    // }

}

exports.deleteUser = async (req, res) => {
}

exports.updateUser = async (req, res) => {
}