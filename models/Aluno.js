const mongoose = require('mongoose')
const { Schema } = mongoose
const { notasSchema } = require('./Notas')

const alunoSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true},
    serie: {
        type: String,
        required: true},
    notas: [{
        type: notasSchema,
        required: true
    }]
})

const Aluno = mongoose.model('Aluno', alunoSchema)

module.exports = Aluno