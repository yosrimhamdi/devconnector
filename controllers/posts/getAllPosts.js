const Post = require('../../models/Post');
const machine = require('../machine');

module.exports = machine.getAll(Post);
