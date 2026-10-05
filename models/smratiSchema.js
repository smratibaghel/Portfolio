import mongoose from "mongoose";

const smratiSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true,
    },
    email:{
        type:"String",
        required:true,
    },
    subject:{
        type:"String",
        required:true,
    },
    message:{
        type:"String",
        required:true,
    },
})

const Smrati = mongoose.model('smrati',smratiSchema);

export default Smrati;















