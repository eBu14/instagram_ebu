const bcrypt = require("bcrypt")

const salt = bcrypt.genSaltSync(1);

const hash = bcrypt.hashSync("test1234" , salt)

console.log(hash)