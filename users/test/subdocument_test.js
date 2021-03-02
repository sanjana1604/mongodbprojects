const assert=require('assert');
const User=require('../src/user');

describe('Subdocuments',()=>{
  it('can create a subdocument',(done)=>{
    const joe=new User({
      name:'Joe',
      posts:[{title:'Friends',genre:'Comedy'}]
    });
    joe.save()
    .then(()=>User.findOne({name:'Joe'}))
    .then((user)=>{
      assert(user.posts[0].title==='Friends');
      done();
    })
  });

  it('Can add subdocuments to an existing record',(done)=>{
    const joe=new User({
      name:'Joe',
      posts:[]
    });
    joe.save()
    .then(()=>User.findOne({name:'Joe'}))
    //below then have the result returned from above then 
    .then((user)=>{
      user.posts.push({title:'Me before you',genre:'Romantic'});
      return user.save();
    })
    .then(()=>User.findOne({name:'Joe'}))
    .then((user)=>{
      assert(user.posts[0].title==='Me before you');
      done();
    });
  });
    it('can remove an exisiting subdocument',(done)=>{
      const joe=new User({
        name:'Joe',
        posts:[{title:'New Post',genre:'New'}]
      });
      joe.save()
      .then(()=>User.findOne({name:'Joe'}))
      .then((user)=>{
        user.posts[0].remove();
        return user.save();  
      })
      .then(()=> User.findOne({name:'Joe'}))
      .then((user)=>{
        assert(user.posts.length===0);
        done();
      });
    });
 
});