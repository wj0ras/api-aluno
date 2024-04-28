const mongoose = require('mongoose')
const { Schema } = mongoose

const notasSchema = new Schema ({
    prova: {
        type: String,
        required: true
    },
    nota: {
        type:Number,
        required: true
    }
})

const Notas = mongoose.model('Notas', notasSchema)

module.exports = {
    Notas,
    notasSchema
}