const cheerio = require('cheerio');

function getInsert(bodystr) {
    if (bodystr) {
        const $ = cheerio.load(bodystr,{decodeEntities: false});
        let obj = {};
        obj.text = [];
        obj.imgs = [];
        let img = {};
        if ($('.neiCon').html()) {
            $('.neiCon').find('p').each((i,e) => {
                obj.text.push($(e).text());
            })
            $('.neiCon').find('img').each((i,e) => {
                img.src = 'http://www.neau.edu.cn'+$(e).attr('src').substring(5,$(e).attr('src').length);
                img.title = $(e).parent('p').next('p').children('span').text();
                let temp = {};
                Object.assign(temp,img);
                obj.imgs.push(temp);
            })
        } else {
            obj.text = [];
            obj.imgs = [];
        }
        return obj;
    }
}
module.exports = getInsert;