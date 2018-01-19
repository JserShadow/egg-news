'use strict';

const Controller = require('egg').Controller;

class NeauController extends Controller {
  async news() {
    this.ctx.body = await this.ctx.model.Neaunews.find({});
  }
  async notices() {
    this.ctx.body = await this.ctx.model.Neaunotices.find({});
  }
  async pictures() {
    this.ctx.body = await this.ctx.model.Neaupictures.find({});
  }
  async socials() {
    this.ctx.body = await this.ctx.model.Neausocials.find({});
  }
  async medias() {
    this.ctx.body = await this.ctx.model.Neaumedias.find({});
  }
  async events() {
    this.ctx.body = await this.ctx.model.Neauevents.find({});
  }
  async enrollments() {
    this.ctx.body = await this.ctx.model.Neauenrollments.find({});
  }
  async bases() {
    this.ctx.body = await this.ctx.model.Neaubases.find({});
  }
}

module.exports = NeauController;
