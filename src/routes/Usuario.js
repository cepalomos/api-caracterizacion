const { Router } = require('express');
const { userCreate, userForId, allUserForNucleo, updateUser, deleteUser, optionsUsers, ageismController, sexoismController, studyismController, ethnicismController, generateCvs, activityismController, salarismController, pensionismController, discapacitadoismController, victimaismController } = require('../controllers/Usuario');
const router = Router();

router.route("/").post(userCreate).get(userForId).put(updateUser).delete(deleteUser);
// router.route("/:id").delete(deleteUser);
router.route("/opciones").get(optionsUsers);
router.route("/nucleo").get(allUserForNucleo);
router.route("/graph/edad").get(ageismController);
router.route("/graph/sexo").get(sexoismController);
router.route("/graph/estudio").get(studyismController);
router.route("/graph/etnia").get(ethnicismController);
router.route("/graph/actividad").get(activityismController);
router.route("/graph/salario").get(salarismController);
router.route("/graph/pension").get(pensionismController);
router.route("/graph/victima").get(victimaismController);
router.route("/graph/discapacitado").get(discapacitadoismController);
router.route("/descargarcvs").get(generateCvs);

module.exports = router;