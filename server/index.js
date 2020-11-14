import express from 'express'

const app = express()

app.use('/', (request, response) => {
    response.send('Hello Friend')
})

app.listen(process.env.PORT || 5000, () => {
 console.log('server running in port 5000')
})