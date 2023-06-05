const { Router } = require('express');
const { userCreate, getAllUserNucleo, updateUser, deleteUser, optionsUsers } = require('../controllers/Usuario');
const router = Router();

router.route("/").post(userCreate).get(getAllUserNucleo).put(updateUser).delete(deleteUser);
router.route("/opciones").get(optionsUsers);


module.exports = router;