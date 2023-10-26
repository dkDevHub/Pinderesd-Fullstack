const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Number, required: true},
    theme: {type: String, default: ''},
    style: {type: String, default: ''},
    tags: {type: [String], default: []},
    picture: {type: String, required: true},
    size: {type: String, required: true}
})

module.exports = model('Post', PostSchema);