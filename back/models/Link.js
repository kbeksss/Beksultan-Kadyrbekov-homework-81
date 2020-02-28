const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    shortLink: {
        type: String,
        required: true
    }
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;
