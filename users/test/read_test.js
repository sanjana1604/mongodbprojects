const assert=require('assert');
const User=require('../src/user');

describe('Reading users out of the database',()=>{

  let joe;
//this beforeEach we created to create a elle user before we access it from user model
  beforeEach((done)=>{
    joe=new User({name:'Joe'});
    ryan=new User({name:'Ryan'});
    maria=new User({name:'Maria'});
    elle=new User({name:'Elle'});
    Promise.all([joe.save(),elle.save(),ryan.save(),maria.save()])
      .then(()=>done());
  })
  it('finds all the users with a name joe',(done)=>{
    //User below he class we created if we have a class model of name branch then we will write Branch.find() or Branch.findOne()
    User.find({name:'Joe'})
      .then((users)=>{
        assert(users[0]._id.toString()===joe._id.toString());
        done();
      });
  });
  it('find a user with a particular id',(done)=>{
    User.findOne({_id: joe._id})
      .then((user)=>{
        assert(user.name==='Joe');
        done();
      });
  });

  it('can skip and limit the result set',(done)=>{
    //joe ryan maria elle we will skip joe and limit ryan maria
    User.find({})
      .sort({name:1})
      .skip(1)
      .limit(2)
      .then((users)=>{
        assert(users.length===2);
        assert(users[0].name==='Joe');
        assert(users[1].name==='Maria');
        done();
      });
  });
});