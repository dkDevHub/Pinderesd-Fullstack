const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    history: {type: [Schema.Types.ObjectId], ref: 'Post', default: []},
})

module.exports = model('User', UserSchema);