'use strict';

const Controller = require('egg').Controller;

class JwcController extends Controller {
  async news() {
    const { skip } = this.ctx.query;
    const contents = await this.ctx.model.Jwcnews.find({}).sort({ createTime: -1 }).limit(15)
      .skip((parseInt(skip) - 1) * 15);
    const count = await this.ctx.model.Jwcnews.count();
    this.ctx.body = {
      number: count,
      list: contents,
    };
  }
  async notice() {
    const { skip } = this.ctx.query;
    const contents = await this.ctx.model.Jwcnotice.find({}).sort({ createTime: -1 }).limit(15)
      .skip((parseInt(skip) - 1) * 15);
    const count = await this.ctx.model.Jwcnotice.count();
    this.ctx.body = {
      number: count,
      list: contents,
    };
  }
  async exam() {
    const { skip } = this.ctx.query;
    const contents = await this.ctx.model.Jwcexam.find({}).sort({ createTime: -1 }).limit(15)
      .skip((parseInt(skip) - 1) * 15);
    const count = await this.ctx.model.Jwcexam.count();
    this.ctx.body = {
      number: count,
      list: contents,
    };
  }
}

module.exports = JwcController;
