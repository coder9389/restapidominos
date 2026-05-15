const Product=require("../models/product");

const getallproducts=async (req,res)=>{
    const {englishName,sort,select}=req.query;
    const queryobject={};
    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit)||3;
    let skip=(page-1)*limit;
    if(englishName){
        queryobject.englishName={$regex:englishName,$options:"i"};
    }
    const showingdataonapi = await Product.find(queryobject).sort("englishName").skip(skip).limit(limit);
    res.status(200).json({ showingdataonapi });
}
const getallproductstesting=async (req,res)=>{
    const showingdataonapi = await Product.find({}).sort("englishName");
    res.status(200).json({ showingdataonapi });
}

module.exports={getallproducts,getallproductstesting};