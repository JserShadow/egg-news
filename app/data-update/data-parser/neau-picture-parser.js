'use strict';
const cheerio = require('cheerio');
function picsParser(body) {
  if (body) {
    const $ = cheerio.load(body, { decodeEntities: false });
    const arr = [];
    const obj = {};
    obj.title = [];
    obj.href = [];
    obj.pichref = [];
    obj.pictitle = [];
    obj.picinsert = [];
    $('.title').prev('a').each((i, e) => {
      let url = $(e).attr('href');
      if (!url.startsWith('http')) {
        url = 'http://www.neau.edu.cn' + url;
      }
      obj.href.push(url);
    });
    arr.push(obj);
    const newarr = get(arr);
    return newarr;
  }
}
function get(arr) {
  const newarr = [];
  arr[0].href.forEach(function(element, i) {
    const obj = {};
    obj.href = element;
    obj.title = arr[0].title[i];
    obj.pictitle = arr[0].pictitle[i];
    obj.pichref = arr[0].pichref[i];
    obj.picinsert = arr[0].picinsert[i];
    newarr.push(obj);
  }, this);
  return newarr;
}
module.exports = picsParser;
