const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const skillsSchema= new Schema({
  S_details:String
});
const Skills=mongoose.model('skills',skillsSchema);
module.exports= Skills;