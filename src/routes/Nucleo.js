const { Router } = require("express");
const {
  allNucleo,
  createNucleo,
  optionsNucleo,
  updateNucleo,
  deleteNucleo,
} = require("../controllers/Nucleo");
const router = Router();

router
  .route("/")
  .get(allNucleo)
  .post(createNucleo)
  .put(updateNucleo)
  .delete(deleteNucleo);
router.route("/opciones").get(optionsNucleo);

module.exports = router;
