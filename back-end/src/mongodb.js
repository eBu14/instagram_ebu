const mongoose = require("mongoose");

const uri = "mongodb+srv://Erdenebulgan:bulgaa1106@cluster0.mggs5zn.mongodb.net/?retryWrites=true&w=majority"
//          End mongodb Atlas iin userName password baina

const connect = async () => {
    try {
        await mongoose.connect(uri);

        console.log('Database connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connect;