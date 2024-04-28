const AlunoModel = require('../models/Aluno')

const alunoController = {

//Inserir dados
    create: async (req, res) => {
        try {

            const aluno = {
                name:req.body.name,
                idade:req.body.idade,
                serie:req.body.serie,
                notas:req.body.notas
            }

            const response = await AlunoModel.create(aluno)

            res.status(201).json({response, msg: 'Aluno criada com sucesso!'})
            
        }
        catch (error) {
            
            console.log(`Erro: ${error}`)

        }
    },

//Buscar todos dados
    getAll: async(req, res) => {
        try {

            const aluno = await AlunoModel.find()

            res.json(aluno)
            
        } 
        catch (error) {
            
            console.log(`Erro: ${error}`)

        }
    },

//Buscar por id
    get: async(req, res) => {
        try {
            
            const id = req.params.id
            const aluno = await AlunoModel.findById(id)
            if(!aluno) {
                res.status(404).json({msg: 'aluno não encontrado'})
                return
            }
            
            res.json(aluno)
        } 
        catch (error) {
            
            console.log(`Erro: ${error}`)

        }
    },

//Delete
    delete: async(req, res) => {
        try {

            const id = req.params.id
            const aluno = await AlunoModel.findById(id)
            if(!aluno) {
                res.status(404).json({msg: 'aluno não encontrado'})
                return
            }

            const deletedAluno = await AlunoModel.findByIdAndDelete(id)
            res.status(200).json({deletedAluno, msg: 'Aluno deletado com sucesso'})
            
        }
         catch (error) {
              
            console.log(`Erro: ${error}`)

        }
    },

//Update nota
    update: async(req, res) => {
        try {

            const id = req.params.id
            const aluno = {
                name:req.body.name,
                idade:req.body.idade,
                serie:req.body.serie,
                notas:req.body.notas
            }
            const updateAluno = await AlunoModel.findByIdAndUpdate(id, aluno)
            if(!updateAluno) {
                res.status(404).json({msg: 'Aluno não encontrado'})
                return
            }

            res.status(200).json({aluno, msg: 'Aluno atualizado com sucesso'})
            
        } catch (error) {
              
            console.log(`Erro: ${error}`)

        }
    }
}
module.exports = alunoController