'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const neaunewsSchema = new mongoose.Schema({
    url: String,
    content: {
      text: Array,
      imgs: Array,
    },
    title: String,
    createTime: String,
  });
  return mongoose.model('Neauenrollments', neaunewsSchema, 'neauenrollments');
};
