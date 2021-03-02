//"C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"
const mongoose= require('mongoose');
mongoose.Promise=global.Promise;

before((done)=>{
  mongoose.connect('mongodb://localhost/users_test', { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false  });
// useFindAndModify is set to false to deprecate the findOneAndUpdate and findOneAndDelete
  mongoose.connection
    .once('open',()=> {done();})
    .on('error',(error)=>{
      console.warn('Warning',error);
    });

});

  //beforeEach is a hook which runs before any test runs and clean up the collection
beforeEach((done)=>{
  const {users,comments,blogposts}=mongoose.connection.collections;
  users.drop(()=>{
    comments.drop(()=>{
      blogposts.drop(()=>{
        //Ready to run the next test!!
        done();
      });
    });
  });
});

