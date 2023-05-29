const { Router } = require("express");
const router = Router();
const nucleo = require("./Nucleo");

router.get("/", (req, res) => {
  res.send("hola aqui estamos");
});
router.use("/nucleo", nucleo);

module.exports = router;
