const { Router } = require('express');
const { optionsRuralUrbano } = require('../controllers/OptionsUrbanoRural');
const router = Router();

router.get("/", optionsRuralUrbano);

module.exports = router;