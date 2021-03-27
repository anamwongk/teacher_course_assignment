import { DataTypes } from 'sequelize'
import sequelize from './index'
import Teacher from './Teacher'

const Course = sequelize.define('Courses', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  course_name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  course_description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

Course.belongsTo(Teacher, { foreignKey: 'teacherId' })
Teacher.hasMany(Course, { foreignKey: 'teacherId' })
Course.sync()

export default Course
