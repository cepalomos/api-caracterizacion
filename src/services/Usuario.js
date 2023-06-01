const { User } = require('../db');

const createUserBb = (data) => {
    return User.create(data);
}

module.exports = { createUserBb }