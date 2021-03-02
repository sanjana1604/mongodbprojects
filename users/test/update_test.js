const assert=require('assert');
const User=require('../src/user');

describe('Updating records',()=>{
  let joe;
  beforeEach((done)=>{
    joe=new User({name:'Joe',likes:0});
    joe.save()
    .then(()=>done());
  });

  function assertName(operation,done){
    operation
      .then(()=>User.find({}))
      .then((users)=>{
        assert(users.length===1);
        assert(users[0].name==='Ryan');
        done();
      });
  }
  
  //instance
  it('instance type using set n save',(done)=>{
    joe.set('name','Ryan');
    assertName(joe.save(),done);
  });

  it('A model instance can update',(done)=>{
    // We can only use updateOne not updateMany because we are updating it using a instance
    assertName(joe.updateOne({name:'Ryan'}),done);
  });

  //class
  it('A model class can update',(done)=>{
    assertName(
      // We can use both updateOne and UpdateMany with class update and according to the criteria 
    User.updateMany({name:'Joe'},{name:'Ryan'}),
    done);
  });

  it('A model class can update one record',(done)=>{
    assertName(
    User.findOneAndUpdate({name:'Joe'},{name:'Ryan'}),
    done);
  });

  it('A model class can find a record with an Id and update',(done)=>{
    assertName(
    User.findByIdAndUpdate(joe._id,{name:'Ryan'}),
    done);
  });
//Udpate operators
  it('A user can have their likes incremented by 1',(done)=>{
    User.updateOne({name:'Joe'},{$inc:{likes:1}})
    .then(()=>User.findOne({name:'Joe'}))
    .then((user)=>{
      assert(user.likes===1);
      done();
    })
  })
});