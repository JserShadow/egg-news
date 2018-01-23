'use strict';
const dataUpdate = require('../data-update/index.js');
const config = require('../data-update/config/default.js');
const db = require('mongoose').createConnection(config.mongoUrl);

module.exports = {
  schedule: {
    interval: '30m', // 10分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task() {
    console.log('Data is refreshing...');
    const message1 = await dataUpdate.jwcnews();
    console.log(message1);
    const message2 = await dataUpdate.jwcnotices();
    console.log(message2);
    const message3 = await dataUpdate.jwcexams();
    console.log(message3);
    const message4 = await dataUpdate.neaunews();
    console.log(message4);
    const message5 = await dataUpdate.neaunotice();
    console.log(message5);
    const message6 = await dataUpdate.neauenrollment();
    console.log(message6);
    db.close(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('db closed');
      }
    });
  },
};

