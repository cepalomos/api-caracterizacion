const { Router } = require("express");
const {
  allNucleo,
  createNucleo,
  optionsNucleo,
  updateNucleo,
  deleteNucleo,
  generateCvsNucleo,
} = require("../controllers/Nucleo");
const router = Router();

router
  .route("/")
  .get(allNucleo)
  .post(createNucleo)
  .put(updateNucleo)
  .delete(deleteNucleo);
router.route("/opciones").get(optionsNucleo);
router.route("/descargarcvs").get(generateCvsNucleo);

module.exports = router;
