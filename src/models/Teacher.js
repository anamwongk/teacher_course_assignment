import { DataTypes } from 'sequelize'
import sequelize from './index'

const Teacher = sequelize.define('Teachers', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

Teacher.sync()

export default Teacher
