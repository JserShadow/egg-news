const cheerio = require('cheerio');

function neauMainParser(bodystr) {
    if (bodystr) {
        const $ = cheerio.load(bodystr);
        let obj = {};
        let arr = [];
        obj.href = [];
        obj.title = [];
        obj.createTime = [];
        obj.img = [];
        obj.insert = [];
        $('div.title a').each((i,e) => {
            let href = $(e).attr('href');
            if (!href.startsWith('http')) {
                href = 'http://www.neau.edu.cn'+href;
            }
            obj.href.push(href);
            obj.title.push($(e).text());
        })
        $('div.title').next('strong').each((i,e) => {
            obj.createTime.push($(e).text().substring(1,$(e).text().length-1));
        })
        arr.push(obj);
        let newarr = get(arr);
        return newarr;
        
    }
}
function get(arr) {
    let newarr = [];
    arr[0].href.forEach(function(element,i) {
        let obj = {};
        obj.href = element;
        obj.title = arr[0].title[i];
        obj.createTime = arr[0].createTime[i];
        obj.img = arr[0].img[i];
        obj.insert = arr[0].insert[i];
        newarr.push(obj);
    }, this);
    return newarr;
}
module.exports = neauMainParser;