'use strict';

const axios = require('axios');
const neauParser = require('../data-update/data-parser/neau-main-parser.js');
const neauContentParser = require('../data-update/data-parser/neau-insert-parser.js');
const jwcParser = require('../data-update/data-parser/jwc-titles-parser.js');
const jwcContentParser = require('../data-update/data-parser/jwc-insert-parser');
const { Service } = require('egg');

class InfoUpdateService extends Service {
  timeout() {
    return new Promise(resolve => {
      setTimeout(resolve, 20000);
    });
  }
  async saveToMongo(model, data) {
    const findRes = await model.find({ url: data.url });
    if (findRes.length === 0) {
      const newData = new model(data);
      newData.save();
    } else {
      await model.update({ url: data.url }, data);
    }
  }
  async getNeauNotice() {
    const { Neaunotices } = this.ctx.model;
    const pageStr = await axios.get(this.config.neauNoticeUrl);
    const titleContent = neauParser(pageStr.data);
    let contentPage;
    for (let i = 0; i < titleContent.length; i++) {
      if (titleContent[i].url.indexOf('www.neau.edu.cn') !== -1) {
        try {
          contentPage = await axios.get(titleContent[i].url);
          const content = neauContentParser(contentPage.data);
          titleContent[i].content = content;
        } catch (error) {
          await this.timeout();
          contentPage = await axios.get(titleContent[i].url);
          const content = neauContentParser(contentPage.data);
          titleContent[i].content = content;
        }
      } else {
        titleContent[i].content = {
          text: '暂无该文章内容，请访问原文链接',
        };
      }
      await this.saveToMongo(Neaunotices, titleContent[i]);
    }
  }
  async getJwcNotice() {
    const { Jwcnotice } = this.ctx.model;
    const pageStr = await axios.get(this.config.jwcNoticeUrl);
    const titleContent = jwcParser(pageStr.data);
    let contentPage;
    for (let i = 0; i < titleContent.length; i++) {
      if (titleContent[i].url.indexOf('jwc.neau.edu.cn') !== -1) {
        try {
          contentPage = await axios.get(titleContent[i].url);
          const content = jwcContentParser(contentPage.data);
          titleContent[i].content = content;
        } catch (error) {
          await this.timeout();
          contentPage = await axios.get(titleContent[i].url);
          const content = jwcContentParser(contentPage.data);
          titleContent[i].content = content;
        }
      } else {
        titleContent[i].content = {
          text: '暂无该文章内容，请访问原文链接',
        };
      }
      await this.saveToMongo(Jwcnotice, titleContent[i]);
    }
  }
  async getJwcExam() {
    const { Jwcexam } = this.ctx.model;
    const pageStr = await axios.get(this.config.jwcExamUrl);
    const titleContent = jwcParser(pageStr.data);
    let contentPage;
    for (let i = 0; i < titleContent.length; i++) {
      if (titleContent[i].url.indexOf('jwc.neau.edu.cn') !== -1) {
        try {
          contentPage = await axios.get(titleContent[i].url);
          const content = jwcContentParser(contentPage.data);
          titleContent[i].content = content;
        } catch (error) {
          await this.timeout();
          contentPage = await axios.get(titleContent[i].url);
          const content = jwcContentParser(contentPage.data);
          titleContent[i].content = content;
        }
      } else {
        titleContent[i].content = {
          text: '暂无该文章内容，请访问原文链接',
        };
      }
      await this.saveToMongo(Jwcexam, titleContent[i]);
    }
  }
}

module.exports = InfoUpdateService;
