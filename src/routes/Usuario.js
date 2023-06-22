const { Router } = require('express');
const { userCreate, userForId,allUserForNucleo, updateUser, deleteUser, optionsUsers } = require('../controllers/Usuario');
const router = Router();

router.route("/").post(userCreate).get(userForId).put(updateUser).delete(deleteUser);
router.route("/opciones").get(optionsUsers);
router.route("/nucleo").get(allUserForNucleo)


module.exports = router;