import mongoose from "mongoose";

const metSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    studId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'student'
    }]
});
const mentor =mongoose.model('mentor',metSchema);

export default mentor;