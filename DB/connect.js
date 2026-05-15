const mongoose = require("mongoose");

const URL = "mongodb+srv://bhavendra:12345@cluster0.m7354fz.mongodb.net/dominosDB?retryWrites=true&w=majority&appName=Cluster0";

const connectdb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;