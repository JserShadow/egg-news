'use strict';

const cheerio = require('cheerio');

function neauMainParser(bodystr) {
  if (bodystr) {
    const $ = cheerio.load(bodystr);
    const result = [];
    const obj = {};
    $('div.title a').each(function(i, e) {
      obj.title = $(e).text();
      if ($(e).attr('href').startsWith('http')) {
        obj.href = $(e).attr('href');
      } else {
        obj.href = 'http://www.neau.edu.cn' + $(e).attr('href');
      }
      obj.time = $(e).parents('div.title').next('strong')
        .text()
        .substring(1, 11);
      const newObj = {};
      Object.assign(newObj, obj);
      result.push(newObj);
    });
    return result;
  }
}
module.exports = neauMainParser;
