const request = require('request');
const async = require('async');
const cheerio = require('cheerio');
const urlParser = require('./urlParser.js');
const picsParser = require('../data-parser/neau-picture-parser.js');
const pics = require('../data-parser/neau-pics.js');
const picUrl = 'http://www.neau.edu.cn/tsdn_list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1196';
function getPicsInsert(arr,callback) {
    let url = '';
    const loopArr = Array.from({length: arr.length} , (v,i) => i);
    async.eachLimit(loopArr,5,(index,callback) => {
        url = arr[index].href;
        request(url,(err,res,body) => {
            if (err) {
                console.log(err);
                callback();
            }
            const $ = cheerio.load(body);
            let title = '';
            title += $('.pagepic_newtitle_1').text();
            title += $('.title').text().replace(/\s/g,'');
            arr[index].title = title;
            arr[index].pichref = pics.pichref(body);
            arr[index].pictitle = pics.pictitle(body);
            arr[index].picinsert = pics.picinsert(body);
            callback();
        })
    },(err) => {
        if (err) {
            console.log(err);
        }
        callback(arr);
    })
}
function getPics(callback) {
    urlParser(picUrl,(urlObj) => {
        let arr = [];
        let urlerr = [];
        let flag = 0;
        const loopArr = Array.from({length: urlObj.pageNum},(v,i) => i);
        async.eachLimit(loopArr,10,(index,callback) => {
            let url = urlObj.part1+(index+1)+urlObj.part2;
            request(url,(err,res,body) => {
                if (err) {
                    console.log(err);
                    callback();
                }
                if (!body) {
                    urlerr.push(url);
                    flag++;
                    if (flag >= 10) {
                        setTimeout(() => {
                            for (var i = 0; i < urlerr.length; i++) {
                                request(urlerr[i],(err1,res1,body1) => {
                                    arr.push(...picsParser(body1));
                                    callback();
                                })
                            }
                        },10000);
                    }
                } else {
                    arr.push(...picsParser(body));
                    callback();
                }
            })
        },(err) => {
            getPicsInsert(arr,(arr) => {
                callback(arr);
            })
        })
    })
}
module.exports = getPics;