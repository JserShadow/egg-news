'use strict';

const mongoose = require('mongoose');
const jwc = require('./getPages/jwc.js');
const neau = require('./getPages/neau-main.js');
const neauPic = require('./getPages/neau-pictures.js');
const neauEve = require('./getPages/neau-events.js');
const config = require('./config/default.js');
const models = require('./models/model.js');

function dataUpdate() {
  mongoose.connect(config.mongoUrl, { config: { autoIndex: false } }, function(err) {
    if (err) {
      console.log('连接失败：' + err);
      process.exit(1);
    }
    console.log('mongo连接成功...');
  });
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
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at jwcnews:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
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
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at jwcnotice:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
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
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at jwcexam:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
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
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at neaunews:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
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
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at neaunotice:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
  neau('base', function(data) {
    const model = mongoose.model('neaubase', models.neauMainSchema);
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
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at neaubase:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
  neau('media', function(data) {
    const model = mongoose.model('neaumedia', models.neauMainSchema);
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
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at neaumedia:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
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
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at neauenrollment:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
  neau('social', function(data) {
    const model = mongoose.model('neausocial', models.neauMainSchema);
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
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at neausocial:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
  neauPic(function(data) {
    const model = mongoose.model('neaupicture', models.neauPictureSchema);
    data.forEach(function(element) {
      const infoObj = {
        url: element.href,
        title: element.title,
        pictitle: element.pictitle,
        pichref: element.pichref,
        picinsert: element.picinsert,
      };
      const position = { url: element.href };
      const option = { upsert: true, multi: true };
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at neaupic:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
  neauEve(function(arr) {
    const model = mongoose.model('neauevents', models.neauEventSchema);
    arr.forEach(function(element) {
      const infoObj = {
        url: element.url,
        title: element.title,
        eventTitle: element.eventName,
        createTime: element.createTime,
        insert: element.insert,
        picUrl: element.picUrl,
      };
      const position = { url: element.href };
      const option = { upsert: true, multi: true };
      model.update(position, infoObj, option, (err, res) => {
        if (err) {
          console.log('update err at neauevents:' + err);
        } else {
          console.log(res);
        }
      });
    }, this);
  });
  return new Promise((resolve, reject) => {
    resolve('Update complete!');
    reject('Update failed!');
  });
}
module.exports = dataUpdate;
