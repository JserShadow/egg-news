const url = require('url');
const request = require('request');
const cheerio = require('cheerio');
function objGetter(mainUrl,callback) {
    request(mainUrl,(err,res,body) => {
        let urlObj = {};
        const $ = cheerio.load(body);
        let href = $('a.Next').attr('href');
        urlObj.url = mainUrl.split('?')[0]+href;
        urlObj.pageNum = parseInt(href.split('&')[0].split('=')[1]);
        urlObj.part1 = urlObj.url.split('=')[0]+'='+urlObj.url.split('=')[1]+'=';
        urlObj.part2 = '&'+urlObj.url.split('&')[2]+'&'+urlObj.url.split('&')[3]+'&'+urlObj.url.split('&')[4];
        callback(urlObj);
    })
}
module.exports = objGetter;