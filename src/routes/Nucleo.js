const { Router } = require("express");
const {
  allNucleo,
  createNucleo,
  optionsNucleo,
} = require("../controllers/Nucleo");
const router = Router();

router.route("/").get(allNucleo).post(createNucleo);
router.route("/opciones").get(optionsNucleo);

module.exports = router;
