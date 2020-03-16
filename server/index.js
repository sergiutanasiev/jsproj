import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import models, { sequelize } from './src/models'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.send('Recived a GET HTTP request method')
})

const eraseDatabaseOnSync = true

sequelize.sync({force: eraseDatabaseOnSync})
    .then(
        app.listen(process.env.PORT=3000, () => {
            console.log(`Listening on ${process.env.PORT}`)
        })        
    )


