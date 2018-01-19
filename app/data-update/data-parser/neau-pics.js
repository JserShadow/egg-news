'use strict';

const cheerio = require('cheerio');

exports.pichref = function(body) {
  if (body) {
    const $ = cheerio.load(body);
    const href = [];
    $('#pagepicimgsu5 span').each((i, e) => {
      href.push('http://www.neau.edu.cn' + $(e).text());
    });
    $('.neiCon').find('img').each((i, e) => {
      href.push('http://www.neau.edu.cn' + $(e).attr('src').substring(5, $(e).attr('src').length));
    });
    return href;
  }
};

exports.pictitle = function(body) {
  const $ = cheerio.load(body);
  const title = [];
  $('#pagepictitlesu5 span').each((i, e) => {
    title.push($(e).text());
  });
  return title;
};

exports.picinsert = function(body) {
  const $ = cheerio.load(body, { decodeEntities: false });
  const insert = [];
  $('textarea').each((i, e) => {
    insert.push($(e).text().replace(/[\r\n]/g, '')
      .replace(/[\t\f]/g, ''));
  });
  $('.neiCon').each((i, e) => {
    insert.push($(e).html().replace(/[\r\n]/g, '')
      .replace(/[\t\f]/g, ''));
  });
  return insert;
};
