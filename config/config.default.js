'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1515842211734_9974';

  // add your config here
  config.middleware = [];
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/neauInfomation',
    options: {},
  };
  config.cors = {
    allowMethods: 'GET',
    credentials: true,
  };
  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb',
  };
  // ignore csrf
  config.security = {
    csrf: {
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    xframe: {
      enable: false,
    },
    domainWhiteList: [ 'localhost:8080' ],
  };
  // add static file server
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    dynamic: true,
  };
  return config;
};
