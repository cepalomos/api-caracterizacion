const { Router } = require('express');
const { userCreate, getAllUserNucleo, updateUser, deleteUser } = require('../controllers/Usuario');
const router = Router();

router.route("/").post(userCreate).get(getAllUserNucleo).put(updateUser).delete(deleteUser);


module.exports = router;