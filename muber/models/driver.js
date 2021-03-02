const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const pointSchema= new Schema({
  type: { type: String, default: 'Point' },
  // index below tells that the below property is a important property that it shoukd be keep track of and consider to be index that can used for geojson type queries.
  coordinates: { type : [Number], index:'2dsphere' }
})

const DriverSchema=new Schema({
  email: {
    type:String,
    required: true
  },
  driving:{
    type:Boolean,
    default: false
  },
  geometry: pointSchema
});

const Driver = mongoose.model('driver',DriverSchema);

module.exports = Driver;