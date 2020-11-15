import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import linksRoutes from './routes/links.js'
import linkRoutes from './routes/link.js'

const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static('build'))

app.use('/links', linksRoutes)
app.use('/', linkRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`server running in port ${PORT}`))

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('connected to MongoDB'))
    .catch(() => console.log(`something went wrong, can't connect to MongoDB`))