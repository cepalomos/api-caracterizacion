const { Router } = require("express");
const { allNucleo, createNucleo } = require("../controllers/Nucleo");
const router = Router();

router.route("/").get(allNucleo).post(createNucleo);

module.exports = router;
