const { Router } = require('express');
const { userCreate } = require('../controllers/Usuario');
const router = Router();

router.route("/").post(userCreate);


module.exports = router;