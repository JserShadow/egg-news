const request = require('request');
const urlPar = require('./urlParser.js');
const dataParser = require('../data-parser/jwc-titles-parser.js');
const insertParser = require('../data-parser/jwc-insert-parser.js');
const newsUrl = 'http://jwc.neau.edu.cn/wejlist.jsp?urltype=tree.TreeTempUrl&wbtreeid=1887';
const noticeUrl = 'http://jwc.neau.edu.cn/wejlist.jsp?urltype=tree.TreeTempUrl&wbtreeid=1888';
const examUrl = 'http://jwc.neau.edu.cn/wejlist.jsp?urltype=tree.TreeTempUrl&wbtreeid=1988';

const async = require('async');
function getJwcInsert(arr,callback) {
    let url = '';
    const loopArr = Array.from({length: arr.length} , (v,i) => i);
    async.eachLimit(loopArr,10,function (index,callback) {
        url = arr[index].href;
        request(url,(err,res,body) => {
            arr[index].init = insertParser(body);
            callback();
        })
    },(err) => {
        callback(arr);
    })
}
function getJwcPages(selectstr,callback) {
    let mainUrl = '';
    if(selectstr === 'news') {
        mainUrl = newsUrl;
    } else if(selectstr === 'notice') {
        mainUrl = noticeUrl;
    } else if (selectstr === 'exam') {
        mainUrl = examUrl;
    }
    urlPar(mainUrl, (data) => {
        let arr = [];
        let flag = 0;
        let urlerr = [];
        const loopArr = Array.from({ length: data.pageNum }, (v, i) => i);
        async.eachLimit(loopArr, 10, function (index, callback) {
            let url = data.part1+(index+1)+data.part2;
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
                                    arr.push(...dataParser(body));
                                    callback();
                                })
                            }
                        },10000)
                    }
                } else {
                    arr.push(...dataParser(body));
                    callback();
                }
            })
        }, (err) => {
            if (err) {
                console.log(err);
            }
            getJwcInsert(arr,(arr) => {
                callback(arr);
            })
        });
    
    });
}
module.exports = getJwcPages;