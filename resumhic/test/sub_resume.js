// const assert=require('assert');
// const User=require('../src/user');

// describe('Subdocument resume',()=> {
//   it('can create a subdocument resume of user',(done) => {
//     const ram=new User({ 
//       Email:'sitaram@gmail.com',
//       Password:'sitaram',
//       Resume: [{
//         Name: 'Ram',
//         Address: 'RamMandir',
//         PostCode: 224123,
//         City: 'Ayodhya',
//         State: 'UP',
//         Email: 'sitaram@gmail.com',
//         Phone:1234567890,
//         Education:[{
//           I_name:'Gurukul',
//           Degree:'God',
//           Grades:'100%'
//         }],
//         Skills:[{
//           S_details:'All rounder'
//         }],
//         Experience:[{
//           E_details:'14 years of vanvas'
//         }],
//         Achievement:[{
//           A_details:'Win the fight with Ravan'
//         }]
//       }] 
//     });
//     ram.save()
//       .then(() => User.findOne({ Email : 'sitaram@gmail.com'}))
//       .then((user) => {
//         assert(user.Resume[0].Name==='Ram');
//         done();
//       });
//   });
//   it('can add a subdocument resume of existing user',(done) => {
//     const ram=new User({
//       Email:'sitaram@gmail.com',
//       Password:'sitaram',
//       Resume:[]
//     });
//     ram.save()
//       .then(() => User.findOne({ Email: 'sitaram@gmail.com'}))
//       .then((user) => {
//         user.Resume.push({
//           Name: 'Ram',
//         Address: 'RamMandir',
//         PostCode: 224123,
//         City: 'Ayodhya',
//         State: 'UP',
//         Email: 'sitaram@gmail.com',
//         Phone:1234567890,
//         Education:[{
//           I_name:'Gurukul',
//           Degree:'God',
//           Grades:'100%'
//         }],
//         Skills:[{
//           S_details:'All rounder'
//         }],
//         Experience:[{
//           E_details:'14 years of vanvas'
//         }],
//         Achievement:[{
//           A_details:'Win the fight with Ravan'
//         }]
//         });
//         return user.save();
//       })
//       .then(() => User.findOne({ Email: 'sitaram@gmail.com'}))
//       .then((user) => {
//         assert(user.Resume[0].City==='Ayodhya');
//         done();
//       })
//   });
// });  