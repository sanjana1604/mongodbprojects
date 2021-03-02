const mongoose= require('mongoose');
const ResumeSchema=require('./resume');
const Schema= mongoose.Schema;

const UserSchema= new Schema({
  Email : String,
  Password: String,
  Resume: {
    type: Schema.Types.ObjectId,
    ref:'resume'
  }
});

const User= mongoose.model('user',UserSchema);

module.exports= User;