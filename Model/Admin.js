const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    email: {
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