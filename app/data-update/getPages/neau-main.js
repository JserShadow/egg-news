'use strict';
const request = require('request');
const async = require('async');
const urlParser = require('./urlParser.js');
const dataParser = require('../data-parser/neau-main-parser.js');
const insertParser = require('../data-parser/neau-insert-parser.js');

const newsUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1194';
const noticeUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1175';
const baseUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1258';
const mediaUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1198';
const enrollmentUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1255';
const socialUrl = 'http://www.neau.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1257';

function getNeauInsert(arr, callback) {
  let url = '';
  const loopArr = Array.from({ length: arr.length }, (v, i) => i);
  async.eachLimit(loopArr, 2, (index, callback) => {
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

function neauMain(selectorstr, callback) {
  let url = '';
  if (selectorstr === 'news') {
    url = newsUrl;
  } else if (selectorstr === 'notice') {
    url = noticeUrl;
  } else if (selectorstr === 'base') {
    url = baseUrl;
  } else if (selectorstr === 'media') {
    url = mediaUrl;
  } else if (selectorstr === 'enrollment') {
    url = enrollmentUrl;
  } else if (selectorstr === 'social') {
    url = socialUrl;
  }
  urlParser(url, function(urlObj) {
    const arr = [];
    const url = urlObj.part1 + 1 + urlObj.part2;
    request(url, (err, res, body) => {
      if (err || !body) {
        console.log(err);
        return;
      }
      arr.push(...dataParser(body));
      getNeauInsert(arr, function(arr) {
        callback(arr);
        return;
      });
    });
  });
}
module.exports = neauMain;
