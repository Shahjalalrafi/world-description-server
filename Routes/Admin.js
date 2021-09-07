const router = require('express').Router()
const Admin = require("../Model/Admin")

router.get('/', async(req, res) => {
    try {
        const adminData = await Admin.find()
        res.json(adminData)
    }
    catch(err) {
        res.json({
            message: err.message
        })
    }
})

router.post('/', async(req, res) => {
    const adminData = new Admin({
        email: req.body.email,
        password: req.body.password
    })
    try {
        const adminSchema = await adminData.save()
        res.json(adminSchema)
    }
    catch(err) {
        res.json({
            message: err.message
        })
    }

})

module.exports = router