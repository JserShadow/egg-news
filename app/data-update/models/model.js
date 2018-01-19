'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;
exports.jwcSchema = new schema({
  url: String,
  title: String,
  createTime: String,
  init: {
    text: Array,
    imgs: Array,
    pdf: Array,
  },
});
exports.neauMainSchema = new schema({
  url: String,
  title: String,
  createTime: String,
  init: {
    text: Array,
    imgs: Array,
  },
});
exports.neauPictureSchema = new schema({
  url: String,
  title: String,
  pictitle: Array,
  pichref: Array,
  picinsert: Array,
});
exports.neauEventSchema = new schema({
  url: String,
  title: String,
  eventTitle: String,
  createTime: String,
  insert: String,
  picUrl: Array,
});
