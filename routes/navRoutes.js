const express = require('express');
const router = express.Router()

const navController = require('../controllers/navController')

router.get('/', navController.index)
router.get('/contato', navController.contato)
router.get('/cadastro', navController.cadastro)
router.get('/login', navController.login)
router.get('/servicos', navController.servicos)
router.get('/sobre', navController.sobre)

module.exports = router