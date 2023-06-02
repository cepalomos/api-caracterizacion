const { User } = require('../db');

const createUserBb = (idNucleo, data) => {
    return User.create(data)
        .then(user => user.setNucleo(idNucleo));
}

const getUsersNucleoBd = (idNucleo) => {
    return User.findAll({ where: { nucleoId: idNucleo } });
}

module.exports = { createUserBb, getUsersNucleoBd }