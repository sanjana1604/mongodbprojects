const assert=require('assert');
const User=require('../src/user');

describe('Creating records',()=>{
  it('saves a user',(done)=>{
    const joe=new User({name:'joe'});

    joe.save()
      .then(()=>{
      //Has joe save in the database that's why we use assert
      assert(!joe.isNew);
      done();
  })
});

});