// const connectdb = require("./DB/connect");

// const product = require("./models/product");

// const productjson = require("./product.json");

// const start = async () => {

//     try {

//         await connectdb();
//         await product.deleteMany();      
//         await product.create(productjson);
//         console.log("we are sending this data to mongodb");

//     } catch (error) {

//         console.log(error);

//     }
// };

// start();
require("dotenv").config();

const connectdb = require("./DB/connect");

const product = require("./models/product");

const productjson = require("./product.json");

const start = async () => {

    try {

        await connectdb(process.env.MONGO_URI);

        await product.deleteMany();

        await product.create(productjson);

        console.log("we are sending this data to mongodb");

    } catch (error) {

        console.log(error);

    }
};

start();