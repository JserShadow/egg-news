const cheerio = require('cheerio');

function parseInsert (body) {
    if (body) {
        const $ = cheerio.load(body,{decodeEntities: false});
        let insertStr = '';
        insertStr+=$("div[id^='vsb_content']").html();
        return insertStr.replace(/[\r\n]/g,'').replace(/[\t\f]/g,'');
        
    }
}
module.exports = parseInsert;