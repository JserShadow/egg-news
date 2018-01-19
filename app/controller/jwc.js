'use strict';

const Controller = require('egg').Controller;

class JwcController extends Controller {
  async news() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Jwcnews.find({});
  }
  async notice() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Jwcnotice.find({});
  }
  async exam() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Jwcexam.find({});
  }
}

module.exports = JwcController;
