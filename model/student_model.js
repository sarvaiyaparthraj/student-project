import mongoose from "mongoose";

const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },

    GRID:{
        type:Number,
        required:true,
        unique:true,
    },

   course:{
        type:String,
        enum:["fullstack,video,"]
    },
});

const student = mongoose.model("studentData", studentSchema);
export default student;