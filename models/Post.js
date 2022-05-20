const { Schema, model } = require('mongoose')

const schema = new Schema({
    author_name: { type: String },
    quote_text: { type: String },
})

module.exports = model('User', schema)
