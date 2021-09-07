const router = require('express').Router()
const News = require('../Model/News')

router.get('/', async(req, res) => {
    try {
        const newsData = await News.find()
        res.json(newsData)
    }
    catch(err) {
        res.json({
            message: err.message
        })
    }
})

router.post('/', async(req, res) => {
    const newsDetails = new News({
        title: req.body.title,
        image: req.body.image,
        author: req.body.author,
        description: req.body.description,
        category: req.body.category,
    })
    try {
        const newsSchema = await newsDetails.save()
        res.json(newsSchema)
    }
    catch(err){
        res.json({
            message: err.message
        })
    }
})

module.exports = router