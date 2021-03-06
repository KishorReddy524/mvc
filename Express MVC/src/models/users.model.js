const mongoose = require("mongoose");

const userSchema= new mongoose.Schema(
    {
        firstName:{type: String,required:true},
        lastName: {type:String,required:true},
        gender:{type:String,required:true},
        dateOfBirth:{type:String,required:true},
        userType: {type: String,required:true},
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"student"
        }
    },{
        timestamps: {
            createdAt: true, updatedAt: true
        },
        versionKey: false,
    }
)


module.exports= mongoose.model('user', userSchema);