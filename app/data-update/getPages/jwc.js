'use strict';
const request = require('request');
const urlPar = require('./urlParser.js');
const dataParser = require('../data-parser/jwc-titles-parser.js');
const insertParser = require('../data-parser/jwc-insert-parser.js');
const newsUrl = 'http://jwc.neau.edu.cn/wejlist.jsp?urltype=tree.TreeTempUrl&wbtreeid=1887';
const noticeUrl = 'http://jwc.neau.edu.cn/wejlist.jsp?urltype=tree.TreeTempUrl&wbtreeid=1888';
const examUrl = 'http://jwc.neau.edu.cn/wejlist.jsp?urltype=tree.TreeTempUrl&wbtreeid=1988';

const async = require('async');
function getJwcInsert(arr, callback) {
  let url = '';
  const loopArr = Array.from({ length: arr.length }, (v, i) => i);
  async.eachLimit(loopArr, 10, function(index, callback) {
    url = arr[index].href;
    request(url, (err, res, body) => {
      arr[index].init = insertParser(body);
      callback();
    });
  }, function(err) {
    if (err) {
      console.log(err);
    }
    callback(arr);
  });
}
function getJwcPages(selectstr, callback) {
  let mainUrl = '';
  if (selectstr === 'news') {
    mainUrl = newsUrl;
  } else if (selectstr === 'notice') {
    mainUrl = noticeUrl;
  } else if (selectstr === 'exam') {
    mainUrl = examUrl;
  }
  urlPar(mainUrl, function(data) {
    const arr = [];
    const url = data.part1 + 1 + data.part2;
    request(url, (err, res, body) => {
      if (err || !body) {
        console.log(err);
      } else {
        arr.push(...dataParser(body));
        getJwcInsert(arr, function(arr) {
          callback(arr);
        });
      }
    });
  });
}
module.exports = getJwcPages;
