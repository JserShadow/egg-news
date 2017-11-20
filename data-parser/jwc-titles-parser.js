const cheerio = require('cheerio');
//  取title,href,createtime
function jwcNewsData(bodystr) {
    if (bodystr) {
        const $ = cheerio.load(bodystr);
        let result = [];
        let obj = {};
        $('a.c60062').each(function (i,e) {
          obj.title = $(e).attr('title');
          if ($(e).attr('href').startsWith('http')) {
            obj.href = $(e).attr('href');
          } else {
            obj.href = 'http://jwc.neau.edu.cn'+$(e).attr('href');
          }
          obj.time = $(e).parent('td').next('td.timestyle60062').text().replace(/\s/g,'');
          let newObj = {};
          Object.assign(newObj,obj);
          result.push(newObj);
        })
        return result;
    }
}
module.exports = jwcNewsData;