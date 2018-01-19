'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const neaueventsSchema = new mongoose.Schema({
    url: String,
    picUrl: Array,
    insert: String,
    createTime: String,
    eventTitle: String,
    title: String,
  });
  return mongoose.model('Neauenents', neaueventsSchema, 'neauevents');
};
