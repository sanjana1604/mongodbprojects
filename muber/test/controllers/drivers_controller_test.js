const assert=require('assert');
const request=require('supertest');
const mongoose=require('mongoose');
const app=require('../../app');
const { response } = require('express');

const Driver=mongoose.model('driver');

describe('Drivers Controller',() => {
  it('Post to /api/drivers creates a new driver', done => {
    Driver.countDocuments().then(count => {

      request(app)
      .post('/api/drivers')
      .send({ email : 'test@test.com' })
      .end(()=>{

        Driver.countDocuments().then(newCount => {
          assert(count + 1 === newCount );
          done();
        });
      });

    });
  });

  it('PUT to /api//drivers/id edits an existing driver', done => {
    const driver= new Driver({ email: 't@t.com' , driving: false });
    driver.save().then(() => {
      request(app)
      // .put('/api/drivers/' + driver._id) we can use es6 instead of this. So the es6 code for above line is:-
        .put(`/api/drivers/${driver._id}`)
        .send({ driving: true})
        .end(()=>{
          Driver.findOne({ email: 't@t.com' })
            .then(driver => {
              assert(driver.driving === true);
              done();
            })
        })
    })
  });

  it('DELETE on /api/drivers/id can delete an existing driver', done => {
    const driver= new Driver({ email: 'test@test.com' });
    driver.save().then(()=>{
      request(app)
        .delete(`/api/drivers/${driver._id}`)
        //we didn't give a put request because it is a delete request and didn't need to send anything
        .end(() => {
          Driver.findOne({ email: 'test@test.com' })
            .then((driver) => {
              assert(driver === null);
              done();
            });
        });
    });

  });

  it('GET to /api/drivers finds drivers in a location', done =>{
    const seattleDriver = new Driver({
      email: 'seattle@test.com',
      geometry: { type: 'Point', coordinates: [-122.4759902, 47.6147628] }
    });
    const miamiDriver = new Driver({
      email: 'miami@test.com',
      geometry: { type: 'Point', coordinates: [-80.253, 25.791] }
    });
    
    Promise.all([ seattleDriver.save(), miamiDriver.save() ])
      .then(() => {
        request(app)
          .get('/api/drivers?lng=-80&lat=25')
          .end((err, response) => {
            assert(response.body.length === 1);
            assert(response.body[0].email === 'miami@test.com');
            done();
          });
      });
  });
});