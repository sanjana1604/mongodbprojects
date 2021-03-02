const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BlogPostSchema=new Schema({
  title:String,
  content:String,
  //we use [{}] because each blogpostschema there is a list or array of comments.
  comments:[{
    type:Schema.Types.ObjectId,
    ref:'comment'
  }]
});

const BlogPost=mongoose.model('blogPost',BlogPostSchema);

module.exports=BlogPost;