'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const jwcnoticeSchema = new mongoose.Schema({
    url: String,
    content: {
      text: Array,
      imgs: Array,
      pdfs: Array,
    },
    title: String,
    createTime: String,
  });
  return mongoose.model('Jwcnotice', jwcnoticeSchema, 'jwcnotices');
};
