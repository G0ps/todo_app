import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    "user_id" : {type : String , required : true , unique : true},
    "password" : {type : String , unique : true , required : true}
});

const model = new mongoose.model("users" , schema , "users");

export default {model , schema}