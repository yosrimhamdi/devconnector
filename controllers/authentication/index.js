const register = require('./register');
const logIn = require('./login');
const requireLogIn = require('./requireLogIn');
const logOut = require('./logout');

module.exports = { register, logIn, logOut, requireLogIn };
