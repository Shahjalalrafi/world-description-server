const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    emai: {
        type: String,
        trim: true,
        requird: true
    },
    password: {
        type: String,
        trim: true
    }
})

module.exports= mongoose.model('Admin', adminSchema)