const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const achievementSchema= new Schema({
  A_detail:String
});
const Achievement=mongoose.model('achievement',achievementSchema);
module.exports=Achievement;