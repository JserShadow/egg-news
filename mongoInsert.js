const mongoose = require('mongoose');
const jwc = require('./getPages/jwc.js');
const neau = require('./getPages/neau-main.js');
const neauPic = require('./getPages/neau-pictures.js');
const neauEve = require('./getPages/neau-events.js');
const config = require('./config/default.js');
const models = require('./models/model.js');


function mongoInsert(callback) {
    
    mongoose.connect(config.mongoUrl, { config: { autoIndex: false } }, (err) => {
        if (err) {
            console.log('连接失败：' + err);
            process.exit(1);
        }
        console.log('mongo连接成功...');
    })
    
    jwc('news', (data) => {
        const model = mongoose.model('jwcNews', models.jwcSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                createTime: element.createTime,
                insert: element.insert,
                img: element.img,
                pdf: element.pdf
            };
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at jwcnews:'+err);
                }
            })
        }, this)
    })
    
    jwc('notice', (data) => {
        const model = mongoose.model('jwcnotice', models.jwcSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                createTime: element.createTime,
                insert: element.insert,
                img: element.img,
                pdf: element.pdf
            };
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at jwcnotice:'+err);
                }
            })
        }, this)
    })
    
    jwc('exam', (data) => {
        const model = mongoose.model('jwcexam', models.jwcSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                createTime: element.createTime,
                insert: element.insert,
                img: element.img,
                pdf: element.pdf
            };
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at jwcexam:'+err);
                }
            })
        }, this)
    })
    
    neau('news', (data) => {
        const model = mongoose.model('neaunews', models.neauMainSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                createTime: element.createTime,
                insert: element.insert,
                img: element.img
            }
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at neaunews:'+err);
                }
            })
        }, this)
    })
    
    neau('notice', (data) => {
        const model = mongoose.model('neaunotices', models.neauMainSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                createTime: element.createTime,
                insert: element.insert,
                img: element.img
            }
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at neaunotice:'+err);
                }
            })
        }, this)
    })
    neau('base', (data) => {
        const model = mongoose.model('neaubase', models.neauMainSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                createTime: element.createTime,
                insert: element.insert,
                img: element.img
            }
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at neaubase:'+err);
                }
            })
        }, this)
    })
    
    neau('media', (data) => {
        const model = mongoose.model('neaumedia', models.neauMainSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                createTime: element.createTime,
                insert: element.insert,
                img: element.img
            }
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at neaumedia:'+err);
                }
            })
        }, this)
    })
    
    neau('enrollment', (data) => {
        const model = mongoose.model('neauenrollment', models.neauMainSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                createTime: element.createTime,
                insert: element.insert,
                img: element.img
            }
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at neauenrollment:'+err);
                }
            })
        }, this)
    })
    
    neau('social', (data) => {
        const model = mongoose.model('neausocial', models.neauMainSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                createTime: element.createTime,
                insert: element.insert,
                img: element.img
            }
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at neausocial:'+err);
                }
            })
        }, this)
    })
    
    neauPic((data) => {
        const model = mongoose.model('neaupicture', models.neauPictureSchema);
        data.forEach(function (element) {
            const infoObj ={
                url: element.href,
                title: element.title,
                pictitle: element.pictitle,
                pichref: element.pichref,
                picinsert: element.picinsert
            }
            
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at neaupic:'+err);
                }
            })
        }, this);
    })
    
    neauEve((arr) => {
        const model = mongoose.model('neauevents', models.neauEventSchema);
        arr.forEach(function (element) {
            const infoObj ={
                url: element.url,
                title: element.title,
                eventTitle: element.eventName,
                createTime: element.createTime,
                insert: element.insert,
                picUrl: element.picUrl,
            }
            const position = { url: element.href };
            const option = { upsert: true, multi: true };
            model.update(position,infoObj,option,(err,res) => {
                if (err) {
                    console.log('update err at neauevents:'+err);
                }
            })
        }, this)
    })

    callback();
}
module.exports = mongoInsert;
