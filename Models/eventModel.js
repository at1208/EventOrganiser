const mongoose = require('mongoose');

const EventSchema =  mongoose.Schema({
  _id: { type: Number, required: true},
  eventName: String,
  venue: String,
  imageURL: String,
  startTime: { type: Date },
  endTime: { type: Date },
  price: Number,
  category: String,
  createdTime:  { type: Date }
})

mongoose.model('Event', EventSchema);
