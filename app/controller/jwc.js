'use strict';

const Controller = require('egg').Controller;

class JwcController extends Controller {
  async news() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Jwcnews.find({}).sort({ createTime: -1 });
  }
  async notice() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Jwcnotice.find({}).sort({ createTime: -1 });
  }
  async exam() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Jwcexam.find({}).sort({ createTime: -1 });
  }
}

module.exports = JwcController;
