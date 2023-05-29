const { Router } = require("express");
const { allNucleo } = require("../controllers/Nucleo");
const router = Router();

router.route("/").get(allNucleo);

module.exports = router;
