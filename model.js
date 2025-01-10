const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    id: Number,
    name: String,
    subject: String,
    grade: String,
    status: String,
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;