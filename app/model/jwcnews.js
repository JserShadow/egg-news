'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const jwcnewsSchema = new mongoose.Schema({
    url: String,
    content: {
      text: Array,
      imgs: Array,
      pdfs: Array,
    },
    createTime: String,
    title: String,
  });
  return mongoose.model('Jwcnews', jwcnewsSchema, 'jwcnews');
};
