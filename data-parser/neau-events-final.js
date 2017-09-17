const cheerio = require('cheerio');
function parser(body,thisUrl,createTime) {
    if (body) {
        
        const $ = cheerio.load(body,{decodeEntities: false});
        let obj = {};
        obj.eventName = [];
        obj.title = [];
        obj.url = [];
        obj.picUrl = [];
        obj.insert = [];
        obj.createTime = createTime;
        let arr = [];
        let url = '';
        // obj.eventName.push($('#all-crumbs span.fontstyle60564').each);
        $('#all-crumbs span.fontstyle60564').each((i,e) => {
            if (i === 2) {
                obj.eventName.push($(e).text());
            }
        })
        obj.title.push($('title').text().split('-')[0]);
        $('.neiCon').find('img').each((i,e) => {
            url = $(e).attr('src');
            if (!url.startsWith('http')) {
                url = 'http://www.neau.edu.cn'+url.substring(5,url.length);
            }
            obj.picUrl.push(url);
        })
        obj.insert.push($('.neiCon').html().replace(/[\r\n]/g,'').replace(/[\t\f]/g,''));
        obj.url.push(thisUrl);
        arr.push(obj);
        let newArr = get(arr);
        return newArr;
    }
}
function get(arr) {
    let newarr = [];
    arr[0].url.forEach(function(element,i) {
        let obj = {};
        obj.url = element;
        obj.title = arr[0].title[i];
        obj.createTime = arr[0].createTime[i];
        obj.insert = arr[0].insert[i];
        obj.picUrl = arr[0].picUrl;
        obj.eventName = arr[0].eventName[i];
        newarr.push(obj);
    }, this);
    return newarr;
}
module.exports = parser;