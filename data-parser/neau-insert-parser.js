const cheerio = require('cheerio');

function getInsert(bodystr) {
    if (bodystr) {
        const $ = cheerio.load(bodystr,{decodeEntities: false});
        let insertstr = '';
        $('.neiCon').each((i,e) => {
            insertstr+=$(e).html();
        })
        return insertstr.replace(/[\r\n]/g,'').replace(/[\t\f]/g,'');
        
    }
}
module.exports = getInsert;