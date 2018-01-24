'use strict';

const Controller = require('egg').Controller;

class NeauController extends Controller {
  async news() {
    const { skip } = this.ctx.query;
    this.ctx.body = await this.ctx.model.Neaunews.find({}).sort({ createTime: -1 }).limit(20)
      .skip(parseInt(skip));
  }
  async notices() {
    const { skip } = this.ctx.query;
    this.ctx.body = await this.ctx.model.Neaunotices.find({}).sort({ createTime: -1 }).limit(20)
      .skip(parseInt(skip));
  }
  async pictures() {
    const { skip } = this.ctx.query;
    this.ctx.body = await this.ctx.model.Neaupictures.find({}).sort({ createTime: -1 }).limit(20)
      .skip(parseInt(skip));
  }
  async socials() {
    const { skip } = this.ctx.query;
    this.ctx.body = await this.ctx.model.Neausocials.find({}).sort({ createTime: -1 }).limit(20)
      .skip(parseInt(skip));
  }
  async medias() {
    const { skip } = this.ctx.query;
    this.ctx.body = await this.ctx.model.Neaumedias.find({}).sort({ createTime: -1 }).limit(20)
      .skip(parseInt(skip));
  }
  async events() {
    const { skip } = this.ctx.query;
    this.ctx.body = await this.ctx.model.Neauevents.find({}).sort({ createTime: -1 }).limit(20)
      .skip(parseInt(skip));
  }
  async enrollments() {
    const { skip } = this.ctx.query;
    this.ctx.body = await this.ctx.model.Neauenrollments.find({}).sort({ createTime: -1 }).limit(20)
      .skip(parseInt(skip));
  }
  async bases() {
    const { skip } = this.ctx.query;
    this.ctx.body = await this.ctx.model.Neaubases.find({}).sort({ createTime: -1 }).limit(20)
      .skip(parseInt(skip));
  }
}

module.exports = NeauController;
