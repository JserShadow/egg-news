'use strict';

const axios = require('axios');
const neauParser = require('../data-update/data-parser/neau-main-parser.js');
const { Service } = require('egg');

class InfoUpdateService extends Service {
  async getNeauNotice() {
    const pageStr = await axios.get(this.config.neauNoticeUrl);
    const result = neauParser(pageStr);
    return result;
  }
}

module.exports = InfoUpdateService;
