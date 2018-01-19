'use strict';
const cheerio = require('cheerio');

function parseInsert(body) {
  if (body) {
    const $ = cheerio.load(body, { decodeEntities: false });
    const data = {};
    data.text = [];
    data.pdfs = [];
    data.imgs = [];
    const imgObj = {};
    if ($('td.contentstyle59966').html()) {
      $('td.contentstyle59966').find('p').each((i, e) => {
        data.text.push($(e).text().replace(/\s/g, '')
          .replace(/\n/g, ''));
      });
      $('img').each(function(i, e) {
        if ($(e).attr('title')) {
          imgObj.title = $(e).attr('title');
        } else {
          imgObj.title = '';
        }
        if ($(e).attr('src').startsWith('http')) {
          imgObj.src = $(e).attr('src').substring(5, $(e).attr('src').length);
        } else {
          imgObj.src = 'http://jwc.neau.edu.cn' + $(e).attr('src').substring(5, $(e).attr('src').length);
        }
        const newObj = {};
        Object.assign(newObj, imgObj);
        data.imgs.push(newObj);
      });
      $('iframe').each((i, e) => {
        data.pdfs.push('http://jwc.neau.edu.cn' + $(e).attr('src').substring(5, $(e).attr('src').length));
      });
      if (data.pdfs.length > 0) {
        data.text = [];
      }
    } else {
      data.text = [];
      data.pdfs = [];
      data.imgs = [];
    }
    return data;
  }
}
module.exports = parseInsert;
