import Sequelize from 'sequelize'

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const database = process.env.DATABASE

export default new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})
