// const assert= require('assert');
// const User= require('../src/user');


// describe('Removing users out of the database',() =>{
  
//   let ram;
//   beforeEach((done) => {
//     ram=new User({Email:'sitaram@gmail.com',Password:'sitaram'});
//     ram.save()
//       .then(() => done());
//   });
  
//   it('Model instance remove', (done) =>{
//     ram.remove()
//       .then(() => User.findOne({Email:'sitaram@gmail.com'}))
//       .then((user) => {
//         assert(user === null);
//         done();
//       });
//   });
  
//   it('Model class remove', (done) =>{
//     User.remove({Email:'sitaram@gmail.com'})
//     .then(() => User.findOne({Email:'sitaram@gmail.com'}))
//     .then((user) => {
//       assert(user === null);
//       done();
//     });
//   });
  
//   it('Model class findOneAndRemove', (done)=>{
//     User.findOneAndRemove({ Email:'sitaram@gmail.com'})
//     .then(() => User.findOne({Email:'sitaram@gmail.com'}))
//     .then((user) => {
//       assert(user === null);
//       done();
//     });
//   });
  
//   it('Model class findByIdRemove', (done)=>{
//     User.findByIdAndRemove(ram._id)
//     .then(() => User.findOne({Email:'sitaram@gmail.com'}))
//     .then((user) => {
//       assert(user === null);
//       done();
//     });
//   });
// });