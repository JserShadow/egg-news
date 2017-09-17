const cheerio = require('cheerio');

function jwcImgParser(body) {
    if (body) {
        const $ = cheerio.load(body);
        let imgArr = [];
        $("[id^='vsb_content']").find('img').each((i,e) => {
            let url = $(e).attr('src');
            url = url.substring(5,url.length);
            imgArr.push('http://jwc.neau.edu.cn'+url);
    
        })
        return imgArr;
        
    }
}

module.exports = jwcImgParser;