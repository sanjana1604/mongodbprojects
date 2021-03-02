const mongoose=require('mongoose');
const drivers_controller = require('../controllers/drivers_controller');

before(done=>{
  mongoose.connect('mongodb://localhost/muber_test',{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});
  mongoose.connection
    .once('open',() => done())
    .on('error', err =>{
      console.warn('Warning', error);
    });

});

beforeEach(done => {
  const {drivers} = mongoose.connection.collections;
  drivers.drop()
   .then(() => drivers.ensureIndex({ 'geometry.coordinates': '2dsphere'}))
   .then(() => done())
   .catch(() => done());
});