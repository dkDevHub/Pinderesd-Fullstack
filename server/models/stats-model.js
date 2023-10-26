const {Schema, model} = require('mongoose');

const StatsSchema = new Schema({
    post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
    users_like: {type: [Schema.Types.ObjectId], ref: 'User', default: []},
    users_save: {type: [Schema.Types.ObjectId], ref: 'User', default: []},
    views: {type: Number, default: 0},
})

module.exports = model('Stats', StatsSchema);