const cheerio = require('cheerio');
//  取title,href,createtime
function jwcNewsData(bodystr) {
    if (bodystr) {
        let arr = [];
        let newsArr = [];
        let newsObj = {};
        newsObj.href = [];
        newsObj.insert = [];
        newsObj.img = [];
        newsObj.pdf = [];
        newsObj.title = [];
        newsObj.createTime = [];
        let obj = {};
        obj.href = '';
        obj.title = '';
        obj.createTime = '';
        const $ = cheerio.load(bodystr);
        $('a.c60062').each((i,e) => {
            let url = $(e).attr('href');
            if (!url.startsWith('http')) {
                url = 'http://jwc.neau.edu.cn'+url;
            }
            newsObj.href.push(url);
            newsObj.title.push($(e).attr('title'));
        })
        $('td.timestyle60062').each((i,e) => {
            newsObj.createTime.push($(e).text().replace(/\s/g,''));
        })
        arr.push(newsObj);
        newsArr = get(arr);
        return newsArr;
        
    }
}
function get(arr) {
    let newarr = [];
    arr[0].href.forEach(function(element,i) {
        let obj = {};
        obj.href = element;
        obj.title = arr[0].title[i];
        obj.createTime = arr[0].createTime[i];
        obj.insert = arr[0].insert[i];
        obj.img = arr[0].img[i];
        obj.pdf = arr[0].pdf[i];
        newarr.push(obj);
    }, this);
    return newarr;
}
module.exports = jwcNewsData;