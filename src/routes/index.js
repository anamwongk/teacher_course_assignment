import { Router } from 'express'
import Teacher from './teacher'
import Course from './course'

const router = Router()

router.use('/teachers', Teacher)
router.use('/courses', Course)

export default router
