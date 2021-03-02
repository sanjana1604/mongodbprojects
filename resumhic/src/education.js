const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const educationSchema=new Schema({
  I_name:String,
  Degree:String,
  Grades:String,
});
const Education=mongoose.model('education',educationSchema);
module.exports=Education;