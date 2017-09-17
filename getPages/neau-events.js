const request = require('request');
const async = require('async');
const cheerio = require('cheerio');
const final = require('../data-parser/neau-events-final.js');

const mainUrl = 'http://www.neau.edu.cn/index/ztxw.htm';
const baseUrl = 'http://www.neau.edu.cn';
const listUrl = 'http://www.neau.edu.cn/list.jsp'

function urlParser(mainUrl) {
    let obj = {};
    obj.pageNum = parseInt(mainUrl.split('?')[1].split('&')[0].split('=')[1]);
    obj.part1 = mainUrl.split('=')[0]+'='+mainUrl.split('=')[1]+'=';
    obj.part2 = '&'+mainUrl.split('&')[2]+'&'+mainUrl.split('&')[3]+'&'+mainUrl.split('&')[4];
    return obj;
}
function getEvents(callback) {
    request(mainUrl,(err,res,body) => {
        const $ = cheerio.load(body);
        let obj = {};
        obj.eventUrls = [];
        obj.eventPics = [];
        $('.ztxwTop a').each((i,e) => {
            obj.eventUrls.push(baseUrl+$(e).attr('href').substring(2,$(e).attr('href').length));
        })
        $('.ztxwTop').find('img').each((i,e) => {
            obj.eventPics.push(baseUrl+$(e).attr('src').substring(2,$(e).attr('src').length));
        })
        callback(obj);
    })
}
function getEventslist(callback) {
    getEvents((obj) => {
        let arr = [];
        const loopArr = Array.from({length: obj.eventUrls.length},(v,i)=>i);
        async.eachLimit(loopArr,10,(index,callback) => {
            request(obj.eventUrls[index],(err,res,body) => {
                if (err) {
                    console.log(err);
                    callback();
                }
                const $ = cheerio.load(body,{decodeEntities: false});
                arr.push(listUrl+$('span.this-page').next('a').attr('href'));
                callback();
            })
        },(err) => {
            callback(arr,obj);
        })
    })
}
function getEachNews(callback) {
    getEventslist((arr,obj) => {
        let hrefArr = [];
        let createTime = [];
        let url = '';
        let loop = Array.from({length: arr.length},(v,i) => i);
        async.eachLimit(loop,10,(i,callback) => {
            if (arr[i].endsWith('undefined')) {
                request(obj.eventUrls[i],(err,res,body) => {
                    const $ = cheerio.load(body);
                    $('.title a').each((i,e) => {
                        if (!$(e).attr('href').startsWith('http')) {
                            url = baseUrl+$(e).attr('href');
                        }
                        hrefArr.push(url);
                    })
                    $('.title').next('strong').each((i,e) => {
                        createTime.push($(e).text().substring(1,$(e).text().length-2));
                    })
                    callback();
                })
            } else {
                    let urlObj = urlParser(arr[i]);
                    const loopArr = Array.from({length: urlObj.pageNum},(v,i) => i);
                    async.eachLimit(loopArr,10,(index,callback) => {
                        request(urlObj.part1+(index+1)+urlObj.part2,(err,res,body) => {
                            const $ = cheerio.load(body);
                            $('.title a').each((i,e) => {
                                if (!$(e).attr('href').startsWith('http')) {
                                    url = baseUrl+$(e).attr('href');
                                }
                                hrefArr.push(url);
                            })
                            $('.title').next('strong').each((i,e) => {
                                createTime.push($(e).text().substring(1,$(e).text().length-1));
                            })
                            callback();
                        })
                    },(err)=> {
                        callback();
                    })
            }
        },(err) => {
            callback(hrefArr,createTime);
        })
    })
}
function getEventFinal(callback) {
    getEachNews((arr,ct) => {
        const loopArr = Array.from({length: arr.length},(v,i) => i);
        let finalArr = [];
        async.eachLimit(loopArr,10,(index,callback) => {
            request(arr[index],(err,res,body) => {
                if (err) {
                    console.log(err);
                    callback();
                }
                finalArr.push(...final(body,arr[index],ct));
                callback();
            })
        },(err) => {
            callback(finalArr);
        })
    })
}
module.exports = getEventFinal;