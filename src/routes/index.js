const { Router } = require("express");
const router = Router();
const nucleo = require("./Nucleo");
const usuario = require("./Usuario");

router.get("/", (req, res) => {
  res.send("hola aqui estamos");
});

router.use("/nucleo", nucleo);
router.use("/usuario", usuario);

module.exports = router;
