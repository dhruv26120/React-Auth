const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    // _id:{  //use this set custom uuid in place of default object id
    //     type: String,
    // required: true,
    // },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Event', eventSchema);