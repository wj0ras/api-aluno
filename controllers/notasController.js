const {Notas: notasModel} = require('../models/Notas')

const notasController = {

//Inserir dados
    create: async (req, res) => {
        try {

            const notas = {
                nota:req.body.nota
            }

            const response = await notasModel.create(notas)

            res.status(201).json({response, msg: 'Nota criada com sucesso!'})
            
        }
        catch (error) {
            
            console.log(`Erro: ${error}`)

        }
    },

//Buscar todos dados
    getAll: async(req, res) => {
        try {

            const notas = await notasModel.find()

            res.json(notas)
            
        } 
        catch (error) {
            
            console.log(`Erro: ${error}`)

        }
    },

//Buscar por id
    get: async(req, res) => {
        try {
            
            const id = req.params.id
            const notas = await notasModel.findById(id)
            if(!notas) {
                res.status(404).json({msg: 'Nota não encontrada'})
                return
            }
            
            res.json(notas)
        } 
        catch (error) {
            
            console.log(`Erro: ${error}`)

        }
    },

//Delete
    delete: async(req, res) => {
        try {

            const id = req.params.id
            const notas = await notasModel.findById(id)
            if(!notas) {
                res.status(404).json({msg: 'Nota não encontrada'})
                return
            }

            const deletedNotas = await notasModel.findByIdAndDelete(id)
            res.status(200).json({deletedNotas, msg: 'Nota deletada com sucesso'})
            
        }
         catch (error) {
              
            console.log(`Erro: ${error}`)

        }
    },

//Update nota
    update: async(req, res) => {
        try {

            const id = req.params.id
            const notas = {
                nota:req.body.nota
            }

            const updateNotas = await notasModel.findByIdAndUpdate(id, notas)
            if(!updateNotas) {
                res.status(404).json({msg: 'Nota não encontrada'})
                return
            }

            res.status(200).json({notas, msg: 'Nota atualizada com sucesso'})
            
        } catch (error) {
              
            console.log(`Erro: ${error}`)

        }
    }
}

module.exports = notasController