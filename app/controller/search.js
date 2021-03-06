'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async search() {
    const { content } = this.ctx.request.body;
    const { Jwcnotice, Jwcexam, Neaunotices } = this.ctx.model;
    const reg = new RegExp(content);
    const jwcNoticesResult = await Jwcnotice.find({ title: reg }).sort({ createTime: -1 });
    const jwcExamResult = await Jwcexam.find({ title: reg }).sort({ createTime: -1 });
    const neauNoticeResult = await Neaunotices.find({ title: reg }).sort({ createTime: -1 });
    const totalnum = jwcExamResult.length + jwcNoticesResult.length + neauNoticeResult.length;
    this.ctx.body = {
      total: totalnum,
      Jwcnotice: jwcNoticesResult,
      Jwcexam: jwcExamResult,
      Neaunotices: neauNoticeResult,
    };
  }
}

module.exports = SearchController;
