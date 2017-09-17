const request = require('request');
const async = require('async');
const urlParser = require('./urlParser.js');
const dataParser = require('../data-parser/neau-main-parser.js');
const insertParser = require('../data-parser/neau-insert-parser.js');
const imgParser = require('../data-parser/neau-img-parser.js');

const newsUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1194';
const noticeUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1175';
const baseUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1258';
const mediaUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1198';
const enrollmentUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1255';
const socialUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1257';

function getNeauInsert(arr,callback) {
    let url = '';
    const loopArr = Array.from({length: arr.length},(v,i) => i);
    async.eachLimit(loopArr,2,(index,callback) => {
        url = arr[index].href;
        request(url,(err,res,body) => {
            arr[index].insert = insertParser(body);
            arr[index].img = imgParser(body);
            callback();
        })
    },(err) => {
        callback(arr);
    })
}

function neauMain(selectorstr,callback) {
    let url = '';
    if (selectorstr == 'news') {
        url = newsUrl;
    } else if (selectorstr == 'notice') {
        url = noticeUrl;
    } else if (selectorstr == 'base') {
        url = baseUrl;
    } else if (selectorstr == 'media') {
        url = mediaUrl;
    } else if (selectorstr == 'enrollment') {
        url = enrollmentUrl;
    } else if (selectorstr == 'social') {
        url = socialUrl;
    }
    urlParser(url,(urlObj) => {
        let arr = [];
        let flag = 0;
        let urlerr = [];
        const loopArr = Array.from({length: urlObj.pageNum},(v,i) => i);
        async.eachLimit(loopArr,2,(index,callback) => {
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
                                    arr.push(...dataParser(body1));
                                    callback();
                                })
                            }
                        },10000);
                    }
                } else {
                    arr.push(...dataParser(body));
                    callback();
                }
            })
        },(err) => {
            if (err) {
                console.log(err);
            }
            getNeauInsert(arr,(arr) => {
                callback(arr);
            })
        })
    })
}
module.exports = neauMain;