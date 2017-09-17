const mongoose = require('mongoose');
const schema = mongoose.Schema;
exports.jwcSchema = new schema({
    url: String,
    title: String,
    createTime: String,
    insert: String,
    img: Array,
    pdf: Array
})
exports.neauMainSchema = new schema({
    url: String,
    title: String,
    createTime: String,
    insert: String,
    img: Array
})
exports.neauPictureSchema = new schema({
    url: String,
    title: String,
    pictitle: Array,
    pichref: Array,
    picinsert: Array
})
exports.neauEventSchema = new schema({
    url: String,
    title: String,
    eventTitle: String,
    createTime: String,
    insert: String,
    picUrl: Array,
})