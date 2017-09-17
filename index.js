const express = require('express');
const app = express();
const mongoose = require('mongoose');
const insert = require('./mongoInsert.js');

insert(() => {
    console.log('数据获取完成');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at', host, port);
});