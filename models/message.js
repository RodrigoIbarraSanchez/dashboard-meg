var mongoose = require ('mongoose')
var Schema = mongoose.Schema

var Schema = new Schema({
    content: {type: String, required: true},
    user: {type: schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Message', schema)