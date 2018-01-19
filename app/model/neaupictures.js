'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const neaupicturesSchema = new mongoose.Schema({
    url: String,
    picinsert: Array,
    pichref: Array,
    pictitle: Array,
    title: Array,
  });
  return mongoose.model('Neaupictures', neaupicturesSchema, 'neaupictures');
};
