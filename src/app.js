import express from 'express'
import routes from './routes'
import morgan from 'morgan'

const HOST = process.env.HOST
const PORT = process.env.PORT
const BASE_PATH = process.env.BASE_PATH
const API_VERSION = process.env.API_VERSION

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send({ success: true })
})

app.use(`${BASE_PATH}${API_VERSION}`, routes)

app.listen(PORT, HOST, () => {
  console.log('Server is now running at port', PORT)
})
