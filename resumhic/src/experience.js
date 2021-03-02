const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const experienceSchema=new Schema({
  E_details:String
});
const Experience=mongoose.model('experience',experienceSchema);
module.exports= Experience;