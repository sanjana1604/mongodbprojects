const mongoose=require('mongoose');
const PostSchema=require('./post_schema');
const Schema=mongoose.Schema;

const userSchema=new Schema({
  name:{
    type:String,
    validate:{
      validator:(name)=>name.length>=2,
      message:'Name must be longer than or equal to 2 characters.'
    },
    required:[true,'Name is required.']
  },
  posts:[PostSchema],
  likes:Number,
  blogPosts:[{
    type:Schema.Types.ObjectId,
    ref:'blogPost'
  }]
});
//virtual property
userSchema.virtual('postCount').get(function(){
  return this.posts.length;
});

userSchema.pre('remove',function(next){
  //we required blogpost and for that we have to use require at the top so to avoid it we use mongoose.model to use already existed model blogpost which is doing same work as require but this will not execute until function is not invoked.
  const BlogPost=mongoose.model('blogPost');
  //this===joe
  //in is a query operator
  BlogPost.remove({_id:{$in:this.blogPosts}})
  //above is async so all the middleware will use next
    .then(()=>next());
});

//In the below line the mongoose ask mongo that do you have a collection called user if not then it creates one and the  second argument instruct the mongoose about the schema
const User=mongoose.model('user',userSchema);

//user represent the entire class of data rather then single user
module.exports=User;