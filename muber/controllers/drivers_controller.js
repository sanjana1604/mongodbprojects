const { parse } = require('path');
const Driver = require('../models/driver');

module.exports={
  greeting(req, res) {
    res.send({ hi : 'there'});
  },

  index(req, res, next){
    // http://google.com?lng=80&lat=20 in this after the question mark the whole thing is a query string and from that  we get lng,lat
    const { lng, lat } = req.query;
    Driver.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          maxDistance: 200000,
          distanceField: 'dis',
          spherical: true,
        },
      },
    ])
    // Driver.geoNear(
    //   { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
    //   { spherical: true, maxDistance: 200000 }
    // )
      .then(drivers => res.send(drivers))
      .catch(next);
  },

  create(req, res, next){
    const driverProps=req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
  },

  edit(req, res, next){
    // we use the same id name as it was in routes.js
    const driverId = req.params.id;
    const driverProps = req.body;

    Driver.findByIdAndUpdate({_id: driverId } , driverProps)
      .then(() => { Driver.findById( {_id: driverId })})
      .then(driver => res.send(driver))
      .catch(next);
  },

  delete(req, res, next){
    const driverId = req.params.id;
    Driver.findByIdAndDelete({ _id: driverId})
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }
};