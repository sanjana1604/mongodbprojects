// const assert = require('assert');
// const User = require('../src/user');

// describe('Updating records',() => {
//   let ram,krishna;

//   beforeEach((done) => {
//     ram=new User({ Email: 'sitaram@gmail.com', Password:'sitaram'});
//     krishna=new User({ Email: 'radhekrishna@gmail.com', Password:'radhekrishna'});
//     Promise.all([ram.save(), krishna.save()])
//       .then(() => done());
//   });

//   function assertName(operation, done){
//     operation
//       .then(() => User.find({}))
//       .then((users) => {
//         assert(users.length === 2)
//         assert(users[0].Password === 'SitaRam');
//         done();
//       }); 
//   }
//   function assertClass(operation, done){
//     operation
//       .then(() => User.find({}))
//       .then((users) => {
//         assert(users.length === 2)
//         assert(users[1].Password === 'RadheKrishna');
//         done();
//       })
//   }

//   it('instance type using set and save',(done) => {
//     // ram.set()
//     ram.set('Password','SitaRam');
//     assertName(ram.save(), done);
//   });

//   it('instance can update',(done) =>{
//     assertName(ram.update({ Password:'SitaRam'}), done);
//   });

//   it('model class can update',(done) => {
//     assertClass(User.update({ Password : 'radhekrishna'}, { Password : 'RadheKrishna'}), done);
//   });

//   it('model class can update one record', (done) =>{
//     assertClass(User.findOneAndUpdate({Password: 'radhekrishna' },{
//       Password: 'RadheKrishna'}), done);
//   });

//   it('model class can find a record with an Id and update',(done) => {
//     assertClass(
//       User.findByIdAndUpdate(krishna._id, { Password : 'RadheKrishna'}),done
//     );    
//   });
// });