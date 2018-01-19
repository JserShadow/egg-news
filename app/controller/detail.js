'use strict';

const Controller = require('egg').Controller;

class DetailController extends Controller {
  async getdetail() {
    const detailClass = this.ctx.request.body.class;
    const id = this.ctx.request.body.id;
    if (detailClass === 'jwcnews') {
      this.ctx.body = await this.ctx.model.Jwcnews.find({ _id: id });
    } else if (detailClass === 'jwcnotices') {
      this.ctx.body = await this.ctx.model.Jwcnotice.find({ _id: id });
    } else if (detailClass === 'jwcexam') {
      this.ctx.body = await this.ctx.model.Jwcexam.find({ _id: id });
    } else if (detailClass === 'neaunews') {
      this.ctx.body = await this.ctx.model.Neaunews.find({ _id: id });
    } else if (detailClass === 'neaunotices') {
      this.ctx.body = await this.ctx.model.Neaunotices.find({ _id: id });
    } else if (detailClass === 'neauenrollment') {
      this.ctx.body = await this.ctx.model.Neauenrollments.find({ _id: id });
    }
  }
}

module.exports = DetailController;
