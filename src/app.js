import express from 'express'
import routes from './routes'
import morgan from 'morgan'

const HOST = process.env.HOST
const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('tiny'))

app.use(routes)

app.listen(PORT, HOST, () => {
  console.log('Server is now running at port', PORT)
})
