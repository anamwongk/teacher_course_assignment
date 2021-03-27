import Teacher from '../models/Teacher'

export default {
  async findMany(req, res) {
    try {
      const teachers = await Teacher.findAll()
      return res.send({ success: true, data: teachers })
    } catch (err) {
      return res.status(500).send({ success: false, message: err })
    }
  },
  async create(req, res) {
    try {
      const { first_name, last_name, birthday } = req.body
      const dateDiff = Date.now() - new Date(birthday).getTime()
      const dateAge = new Date(dateDiff)
      const age = Math.abs(dateAge.getUTCFullYear() - 1970)

      const teacher = await Teacher.findOne({ where: { first_name, last_name } })
      if (teacher) return res.status(200).send({ success: false, message: 'Data already exists' })

      await Teacher.create({ first_name, last_name, age })

      return res.status(201).send({ success: true, message: 'Created successfully' })
    } catch (err) {
      return res.status(500).send({ success: false, message: err })
    }
  }
}
