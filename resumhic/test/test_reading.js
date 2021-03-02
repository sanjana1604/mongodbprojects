// const assert = require('assert');
// const User = require('../src/user');

// describe('Reading users out of the database',() => {

//   let ram;

//   beforeEach((done) => {
//     ram= new User({Email:'sitaram@gmail.com', Password:'sitaram'});
//     ram.save()
//       .then(() => {
//         done();
//       });
//   });

//   it('finds all users with a name of ram',(done)=>{
//     User.find({Email:'sitaram@gmail.com'})
//       .then((users)=>{
//         assert(users[0]._id.toString()===ram._id.toString());
//         done();
//       });
//   });

//   it('find a user with a particular id',(done) => {
//     User.findOne({ _id: ram._id})
//       .then((users) => {
//         assert(users.Email === 'sitaram@gmail.com');
//         done();
//       });
//   })
// });