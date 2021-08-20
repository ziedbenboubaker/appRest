const mongoose = require("mongoose");

const mongooseOpts = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    dbName: process.env.DB_NAME,
};

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, mongooseOpts);
        console.log("Connected to database");
    } catch (err) {
        console.log("Failed connect to database");
        console.log("err :", err);
    }
}

module.exports = connectDB;
