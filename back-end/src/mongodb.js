const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

// const uri = "mongodb+srv://@cluster0.pifgbll.mongodb.net/?retryWrites=true&w=majority"
//          End mongodb Atlas iin userName password baina

const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_DB_URI || '');

        console.log('Database connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connect;