// "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"
const mongoose= require('mongoose');
mongoose.Promise = global.Promise;

before((done)=>{
  mongoose.connect('mongodb://localhost/resumhic', { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false  });

  mongoose.connection
    .once('open',() => { done(); } )
    .on('error',(error)=>{
      console.warn('Warning',error);
  });
});

beforeEach((done) => {
  const {user,resume,experience,education,skills,achievement} =mongoose.connection.collections;
  user.drop(()=>{
    resume.drop(()=>{
      // achievement.drop(()=>{
      //   education.drop(()=>{
      //     experience.drop(()=>{
      //       skills.drop(()=>{
      //         done();
      //       })
      //     })
      //   })
      // })
      done();
    })
  });
});