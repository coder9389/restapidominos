const express=require("express");
const app=express();
const product=require("./Routes/product");
const connectdb = require("./DB/connect");

const port=process.env.port || 3000;
app.get("/",(req,res)=>{
    res.send("connection established");

});

const start=async()=>{
    try{
        app.listen(port,()=>{
            console.log(`${port} server is live `);
            app.use("/api/products",product);
        });
         await connectdb();
    }
    catch(error){
        console.log(error);
    }
}

start();