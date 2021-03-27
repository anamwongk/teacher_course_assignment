import Course from '../models/Course'
import Teacher from '../models/Teacher'

export default {
  async findMany(req, res) {
    try {
      const courses = await Course.findAll({
        include: {
          model: Teacher,
          attributes: ['first_name', 'last_name', 'age']
        }
      })
      return res.send({ success: true, data: courses })
    } catch (err) {
      return res.status(500).send({ success: false, message: err })
    }
  },
  async create(req, res) {
    try {
      const { course_name, course_description, teacherId } = req.body

      const teacher = await Teacher.findOne({ where: { id: teacherId } })
      if (!teacher) return res.status(200).send({ success: false, message: 'Teacher not exists' })

      const course = await Course.findOne({ where: { course_name, teacherId } })
      if (course) return res.status(200).send({ success: false, message: 'Data already exists' })

      await Course.create({ course_name, course_description, teacherId })

      return res.status(201).send({ success: true, message: 'Created successfully' })
    } catch (err) {
      return res.status(500).send({ success: false, message: err })
    }
  }
}
