import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    "content_text" : {type : String , unique : true , required : true},
    "is_ticked" : {type : Boolean , required : true}
});

const model = new mongoose.model("posts" , schema , "posts");


export default {model , schema}