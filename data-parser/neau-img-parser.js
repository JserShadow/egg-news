const cheerio = require('cheerio');

function neauImgParser(body) {
    if (body) {
        const $ = cheerio.load(body);
        let imgArr = [];
        $(".neiCon").find('img').each((i,e) => {
            let url = $(e).attr('src');
            url = url.substring(5,url.length);
            imgArr.push('http://www.neau.edu.cn'+url);
    
        })
        return imgArr;
        
    }
}

module.exports = neauImgParser;