'use strict';

const Controller = require('egg').Controller;

class NeauController extends Controller {
  async count() {
    const result = await this.ctx.model.Neaunews.count();
    this.ctx.body = {
      count: result,
    };
  }
  async news() {
    const { skip } = this.ctx.query;
    const contents = await this.ctx.model.Neaunews.find({}).sort({ createTime: -1 }).limit(15)
      .skip((parseInt(skip) - 1) * 15);
    const count = await this.ctx.model.Neaunews.count();
    this.ctx.body = {
      number: count,
      list: contents,
    };
  }
  async notices() {
    const { skip } = this.ctx.query;
    const contents = await this.ctx.model.Neaunotices.find({}).sort({ createTime: -1 }).limit(15)
      .skip((parseInt(skip) - 1) * 15);
    const count = await this.ctx.model.Neaunotices.count();
    this.ctx.body = {
      number: count,
      list: contents,
    };
  }
  async enrollments() {
    const { skip } = this.ctx.query;
    const contents = await this.ctx.model.Neauenrollments.find({}).sort({ createTime: -1 }).limit(15)
      .skip((parseInt(skip) - 1) * 15);
    const count = await this.ctx.model.Neauenrollments.count();
    this.ctx.body = {
      number: count,
      list: contents,
    };
  }
}

module.exports = NeauController;
