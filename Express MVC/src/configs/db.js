const mongoose = require("mongoose");

const connectdb = ()=>{
    return mongoose.connect("mongodb+srv://kishor:mvc524@cluster0.dg3uq.mongodb.net/mvc?retryWrites=true&w=majority");

}
module.exports=connectdb;
