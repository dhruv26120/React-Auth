const { v4: uuid } = require('uuid');
const Event = require('../models/Event');
const { NotFoundError } = require('../util/errors');

async function getAll() {
  const events = await Event.find().sort({ _id: -1 });
  return events;
}

async function get(id) {
  const event = await Event.findById(String(id));
  if (!event) {
    throw new NotFoundError('Could not find event for id ' + id);
  }
  return event;
}

async function add(data) {
  // const newEvent = new Event({
  //   _id: uuid(),      // This will override MONGO default Objectid
  //   ...data
  // });
  const newEvent = new Event(data);
  await newEvent.save();
}

async function replace(id, data) {
  const updated = await Event.findByIdAndUpdate(id, data, { new: true });
  if (!updated) {
    throw new NotFoundError('Could not find event for id ' + id);
  }
}

async function remove(id) {
  const deleted = await Event.findByIdAndDelete(id);
  if (!deleted) {
    throw new NotFoundError('Could not find event for id ' + id);
  }
}

module.exports = {
  getAll,
  get,
  add,
  replace,
  remove
};
