const cheerio = require('cheerio');

function jwcPdfParser(body) {
    if (body) {
        const $ = cheerio.load(body);
        let pdfArr = [];
        $("[id^='vsb_content']").find('embed').each((i,e) => {
            let url = $(e).attr('src');
            url = url.substring(5,url.length);
            pdfArr.push('http://jwc.neau.edu.cn'+url);
    
        })
        return pdfArr;
        
    }
}

module.exports = jwcPdfParser;