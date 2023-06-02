const { Router } = require('express');
const { userCreate, getAllUserNucleo } = require('../controllers/Usuario');
const router = Router();

router.route("/").post(userCreate).get(getAllUserNucleo);


module.exports = router;