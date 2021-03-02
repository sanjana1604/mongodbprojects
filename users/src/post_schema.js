const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PostSchema=new Schema({
  title:String,
  genre:String
});

module.exports=PostSchema;