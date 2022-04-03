const mongoose = require("mongoose");

const connectdb = ()=>{
    return mongoose.connect("mongodb+srv://satishmvc:mvc123@cluster0.dg3uq.mongodb.net/mvc?retryWrites=true&w=majority");

}
module.exports=connectdb;