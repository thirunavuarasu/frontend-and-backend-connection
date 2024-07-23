import mongoose from "mongoose";


const studSchema =mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    position:String
})

const student = mongoose.model('student',studSchema);

export default student;