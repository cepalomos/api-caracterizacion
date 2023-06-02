const { Router } = require('express');
const { userCreate, getAllUser } = require('../controllers/Usuario');
const router = Router();

router.route("/").post(userCreate).get(getAllUser);


module.exports = router;