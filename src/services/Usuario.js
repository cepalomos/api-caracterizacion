const { User } = require('../db');

const createUserBb = (idNucleo, data) => {
    return User.create(data)
        .then(user => user.setNucleo(idNucleo));
}

const getUsersNucleoBd = (idNucleo) => {
    return User.findAll({ where: { nucleoId: idNucleo } });
}

const updateUserDb = (id, dataUpdate) => {
    return User.update(dataUpdate, { where: { id } });
};

const deleteUserDb = (id) => {
    return User.destroy({ where: { id } });
};

module.exports = { createUserBb, getUsersNucleoBd, updateUserDb, deleteUserDb }