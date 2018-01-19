'use strict';
const dataUpdate = require('../data-update/index.js');
module.exports = {
  schedule: {
    interval: '360m', // 6小时间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task() {
    console.log('Data is refreshing...');
    const message = await dataUpdate();
    console.log(message);
  },
};
