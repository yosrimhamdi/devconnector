const machine = require('../machine');
const Post = require('../../models/Post');

module.exports = machine.createOne(Post);
