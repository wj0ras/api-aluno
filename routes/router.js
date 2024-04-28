const router = require('express').Router()

//Notas router
const notasRouter = require('./notas')
router.use('/', notasRouter)

//Aluno router
const alunoRouter = require('./aluno')
router.use('/', alunoRouter)

module.exports = router