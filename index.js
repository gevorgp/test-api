const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/data')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const cors = require('cors')

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/', routes)


async function startConnection() {
    try {
        await mongoose.connect(
            'mongodb+srv://Gevorg:dev12345@cluster0.qdzfu.mongodb.net/data',
            {
            useNewUrlParser: true
        })
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    }catch (e) {
        console.log(e)
    }
}

startConnection()
