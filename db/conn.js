const mongoose = require('mongoose')

async function main() {
    try {
        
        await mongoose.connect(
            'mongodb+srv://wjoras1:ZgA1gRL48XGNzE6O@cluster0.ndps8ff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        )
        console.log("noSQL Connect")

    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = main