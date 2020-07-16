var express = require('express');
var router = express.Router();
const heroesController = require("../controllers/heroesController");


/* GET home page. */
router.get('/', heroesController.home);

router.get('/heroes', heroesController.heroes);

router.get('/heroes/bio/:id', heroesController.id);

router.get('/heroes/bio/:id/:ok?', heroesController.resenia);

router.get('*', heroesController.error);


module.exports = router;

