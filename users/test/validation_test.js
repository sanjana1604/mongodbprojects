const assert=require('assert');
const User=require('../src/user');

describe('Validating records',()=>{
  it('requires a user name',()=>{
    const user=new User({name:undefined});
    const validationResult=user.validateSync();
    const {message}=validationResult.errors.name;
    assert(message==='Name is required.');
  });

  it('requires a user\'s name longer than 2 characters',()=>{
    const user=new User({name:'E'});
    const validationResult=user.validateSync();
    const {message}=validationResult.errors.name;
    assert(message==='Name must be longer than or equal to 2 characters.')
  });

  it('disallows invalid records from being saved',(done)=>{
    const user=new User({name:'E'});
    user.save()
    //we are not using then because this save is going to call then promise is getting rejected and whenever the promise is getting rejected then we call catch(whenever we are trying to save a invalid record)
      .catch((validationResult)=>{
        const {message}=validationResult.errors.name;
        assert(message==='Name must be longer than or equal to 2 characters.')
        done();
    });
  })
});