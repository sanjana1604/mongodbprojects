const mongoose=require('mongoose');
const assert=require('assert');
const User=require('../src/user');
const BlogPost=require('../src/blog_post');
const Comment=require('../src/comment');
const { populate } = require('../src/user');

describe('Assocations',()=>{
  let joe,blogPost,comment;
  beforeEach((done)=>{
    joe=new User({name:'Joe'});
    blogPost=new BlogPost({title:'Js is great',content:'Yup it really is!'});
    comment=new Comment({content:'Congrats on great post'});

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user=joe;


    Promise.all([joe.save(),blogPost.save(),comment.save()])
      .then(()=>done());
  });

  it('saves a relation betweem a user and a blogpost',(done)=>{
    User.findOne({name:'Joe'})
      .populate('blogPosts')
      .then((user)=>{
        assert(user.blogPosts[0].title==='Js is great');
        done();
      });
  });
  it('saves a full relation graph',(done)=>{
    User.findOne({name:'Joe'})
      .populate({
        path:'blogPosts',
        populate:{
          path:'comments',
          model:'comment',
          populate:{
            path:'user',
            model:'user'
          }
        }
      })
      .then((user)=>{
        assert(user.name==='Joe');
        assert(user.blogPosts[0].title==='Js is great');
        assert(user.blogPosts[0].comments[0].content==='Congrats on great post');
        assert(user.blogPosts[0].comments[0].user.name==='Joe');
        done();
      })
  });
});

