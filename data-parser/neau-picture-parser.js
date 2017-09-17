const cheerio = require('cheerio');
function picsParser(body) {
    if (body) {
        
        const $ = cheerio.load(body,{decodeEntities: false});
        let arr = [];
        let obj = {};
        obj.title = [];
        obj.href = [];
        obj.pichref = [];
        obj.pictitle = [];
        obj.picinsert = [];
        $('.title').prev('a').each((i,e) => {
            let url = $(e).attr('href');
            if (!url.startsWith('http')) {
                url = 'http://www.neau.edu.cn' + url;
            }
            obj.href.push(url);
        })
        arr.push(obj);
        let newarr = get(arr);
        return newarr;
    }
    function get(arr) {
        let newarr = [];
        arr[0].href.forEach(function(element,i) {
            let obj = {};
            obj.href = element;
            obj.title = arr[0].title[i];
            obj.pictitle = arr[0].pictitle[i];
            obj.pichref = arr[0].pichref[i];
            obj.picinsert = arr[0].picinsert[i];
            newarr.push(obj);
        }, this);
        return newarr;
    }
}
module.exports = picsParser;