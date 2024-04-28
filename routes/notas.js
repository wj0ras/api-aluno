const router = require('express').Router()
const notasController = require('../controllers/notasController')

router
    .route('/notas')
    .post((req, res) => notasController.create(req, res))

router
    .route('/notas')
    .get((req, res) => notasController.getAll(req, res))

router
    .route('/notas/:id')
    .get((req, res) => notasController.get(req, res))

router
    .route('/notas/:id')
    .delete((req, res) => notasController.delete(req, res))

 router
    .route('/notas/:id')
    .put((req, res) => notasController.update(req, res))



module.exports = router