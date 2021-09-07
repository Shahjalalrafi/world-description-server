const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const newsRoutes = require('./Routes/News')
const adminRoutes = require('./Routes/Admin')

const app = express()

app.use(express.json())
app.use(cors())

const url = `mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/worldDescription?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true ,useUnifiedTopology: true})
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))

app.use('/news', newsRoutes)
app.use('/make-admin', adminRoutes)

app.listen(5000, () => console.log('listenning to port 5000'))