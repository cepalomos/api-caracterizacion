const rural = require('../public/rural');
const urbano = require('../public/urbano');
const { response } = require('../response/response');

const optionsRuralUrbano = (req, res, next) => {
    try {
        const options = { rural, urbano };
        return response(
            req,
            res,
            next,
            200,
            "opciones de campos de base de datos",
            options
        );
    } catch (error) {
        console.error(error);
        next({ status: 500, message: "Error desconocido en la base datos" });
    }
};

module.exports = { optionsRuralUrbano };