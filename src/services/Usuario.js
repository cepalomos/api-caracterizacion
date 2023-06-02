const { User } = require('../db');

const createUserBb = (idNucleo, data) => {
    return User.create(data)
        .then(user => user.setNucleo(idNucleo));
}

const getUserBd = () => {
    return User.findAll();
}

module.exports = { createUserBb, getUserBd }