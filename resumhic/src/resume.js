const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const ResumeSchema=new Schema({
  Name: String,
  Address: String,
  PostCode: Number,
  City: String,
  State: String,
  Email: String,
  Phone: Number,
  Education: [{ 
    type:Schema.Types.ObjectId,
    ref:'education'
  }],
  Skills:[{
    type:Schema.Types.ObjectId,
    ref:'skills'
  }],
  Experience:[{
    type:Schema.Types.ObjectId,
    ref:'experience'
  }],
  Achievement:[{
    type:Schema.Types.ObjectId,
    ref:'achievement'
  }]
});
const Resume=mongoose.model('resume', ResumeSchema);
module.exports= Resume;