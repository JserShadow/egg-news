'use strict';

const request = require('request');
const cheerio = require('cheerio');
function objGetter(mainUrl, callback) {
  request(mainUrl, (err, res, body) => {
    console.log(0, body, mainUrl);
    const $ = cheerio.load(body, { decodeEntities: false });
    console.log(1);
    const urlObj = {};
    const href = $('a.Next').attr('href');
    urlObj.url = mainUrl.split('?')[0] + href;
    urlObj.pageNum = parseInt(href.split('&')[0].split('=')[1]);
    urlObj.part1 = urlObj.url.split('=')[0] + '=' + urlObj.url.split('=')[1] + '=';
    urlObj.part2 = '&' + urlObj.url.split('&')[2] + '&' + urlObj.url.split('&')[3] + '&' + urlObj.url.split('&')[4];
    callback(urlObj);
  });
}
module.exports = objGetter;
