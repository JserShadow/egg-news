'use strict';
const neau = require('../data-update/getPages/neau-main.js');
const jwc = require('../data-update/getPages/jwc.js');
// const config = require('../data-update/config/default.js');
// const db = require('mongoose').createConnection(config.mongoUrl);


module.exports = {
  schedule: {
    interval: '20s', // 10分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    // console.log('refresh start');
    // const { Jwcnotice, Jwcexam, Neaunotices } = ctx.model;
    // const neauNoticeData = await neau('notice');
    // for (let i = 0; i < neauNoticeData.length; i++) {
    //   const findRes = await Neaunotices.find({ url: neauNoticeData[i].href });
    //   if (findRes.length === 0) {
    //     const newNeauNotice = new Neaunotices(neauNoticeData[i]);
    //     await newNeauNotice.save();
    //   }
    // }
    // console.log('neau notice done');
    // const jwcNoticeData = await jwc('notice');
    // for (let i = 0; i < jwcNoticeData.length; i++) {
    //   const findRes = await Jwcnotice.find({ url: jwcNoticeData[i].href });
    //   if (findRes.length === 0) {
    //     const newJwcNotice = new Jwcnotice(jwcNoticeData[i]);
    //     await newJwcNotice.save();
    //   }
    // }
    // console.log('jwc notice done');
    // const jwcExamData = await jwc('exam');
    // for (let i = 0; i < jwcExamData.length; i++) {
    //   const findRes = await Jwcexam.find({ url: jwcExamData[i].href });
    //   if (findRes.length === 0) {
    //     const newJwcExam = new Jwcexam(jwcExamData[i]);
    //     await newJwcExam.save();
    //   }
    // }
    // console.log('jwc exam done');
    const result = await ctx.service.infoUpdate.getNeauNotice();
    console.log(result);
  },
};

