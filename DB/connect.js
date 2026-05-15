const mongoose = require("mongoose");

const connectdb = async (MONGO_URI) => {

    try {

        await mongoose.connect(MONGO_URI);

        console.log("MongoDB Connected");

    } catch (error) {

        console.log(error);

    }

}

module.exports = connectdb;