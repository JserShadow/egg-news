'use strict';

const cheerio = require('cheerio');
//  取title,href,createtime
function jwcNewsData(bodystr) {
  if (bodystr) {
    const $ = cheerio.load(bodystr);
    const result = [];
    const obj = {};
    $('a.c60062').each(function(i, e) {
      obj.title = $(e).attr('title');
      if ($(e).attr('href').startsWith('http')) {
        obj.url = $(e).attr('href');
      } else {
        obj.url = 'http://jwc.neau.edu.cn' + $(e).attr('href');
      }
      obj.createTime = $(e).parent('td').next('td.timestyle60062')
        .text()
        .replace(/\s/g, '');
      const newObj = {};
      Object.assign(newObj, obj);
      result.push(newObj);
    });
    return result;
  }
}
module.exports = jwcNewsData;
