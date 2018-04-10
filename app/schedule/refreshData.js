'use strict';

module.exports = {
  schedule: {
    interval: '600s', // 10分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    console.log('neau notice begin');
    await ctx.service.infoUpdate.getNeauNotice();
    console.log('jwc notice begin');
    await ctx.service.infoUpdate.getJwcNotice();
    console.log('jwc exam begin');
    await ctx.service.infoUpdate.getJwcExam();
  },
};

