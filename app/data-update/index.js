'use strict';

const mongoose = require('mongoose');
const jwc = require('./getPages/jwc.js');
const neau = require('./getPages/neau-main.js');
const models = require('./models/model.js');

exports.jwcnews = function() {
  return new Promise((resolve, reject) => {
    jwc('news', function(data) {
      const model = mongoose.model('jwcNews', models.jwcSchema);
      data.forEach(function(element) {
        const infoObj = {
          url: element.href,
          title: element.title,
          createTime: element.time,
          init: {
            text: element.init.text,
            imgs: element.init.imgs,
            pdf: element.init.pdfs,
          },
        };
        const position = { url: element.href };
        const option = { upsert: true, multi: true };
        model.update(position, infoObj, option);
      }, this);
      resolve('jwcnews complete');
    });
  });
};
exports.jwcnotices = function() {
  return new Promise((resolve, reject) => {
    jwc('notice', function(data) {
      const model = mongoose.model('jwcnotice', models.jwcSchema);
      data.forEach(function(element) {
        const infoObj = {
          url: element.href,
          title: element.title,
          createTime: element.time,
          init: {
            text: element.init.text,
            imgs: element.init.imgs,
            pdf: element.init.pdfs,
          },
        };
        const position = { url: element.href };
        const option = { upsert: true, multi: true };
        model.update(position, infoObj, option);
      }, this);
      resolve('jwcnotice complete');
    });
  });
};
exports.jwcexams = function() {
  return new Promise((resolve, reject) => {
    jwc('exam', function(data) {
      const model = mongoose.model('jwcexam', models.jwcSchema);
      data.forEach(function(element) {
        const infoObj = {
          url: element.href,
          title: element.title,
          createTime: element.time,
          init: {
            text: element.init.text,
            imgs: element.init.imgs,
            pdf: element.init.pdfs,
          },
        };
        const position = { url: element.href };
        const option = { upsert: true, multi: true };
        model.update(position, infoObj, option);
      }, this);
      resolve('jwcexam complete');
    });
  });
};
exports.neaunews = function() {
  return new Promise((resolve, reject) => {
    neau('news', function(data) {
      const model = mongoose.model('neaunews', models.neauMainSchema);
      data.forEach(function(element) {
        const infoObj = {
          url: element.href,
          title: element.title,
          createTime: element.time,
          init: {
            text: element.init.text,
            imgs: element.init.imgs,
          },
        };
        const position = { url: element.href };
        const option = { upsert: true, multi: true };
        model.update(position, infoObj, option);
      }, this);
      resolve('neaunews complete');
    });
  });
};
exports.neaunotice = function() {
  return new Promise((resolve, reject) => {
    neau('notice', function(data) {
      const model = mongoose.model('neaunotices', models.neauMainSchema);
      data.forEach(function(element) {
        const infoObj = {
          url: element.href,
          title: element.title,
          createTime: element.time,
          init: {
            text: element.init.text,
            imgs: element.init.imgs,
          },
        };
        const position = { url: element.href };
        const option = { upsert: true, multi: true };
        model.update(position, infoObj, option);
      }, this);
      resolve('neaunotice complete');
    });
  });
};
exports.neauenrollment = function() {
  return new Promise((resolve, reject) => {
    neau('enrollment', function(data) {
      const model = mongoose.model('neauenrollment', models.neauMainSchema);
      data.forEach(function(element) {
        const infoObj = {
          url: element.href,
          title: element.title,
          createTime: element.time,
          init: {
            text: element.init.text,
            imgs: element.init.imgs,
          },
        };
        const position = { url: element.href };
        const option = { upsert: true, multi: true };
        model.update(position, infoObj, option);
      }, this);
      resolve('neauenrollment complete');
    });
  });
};

