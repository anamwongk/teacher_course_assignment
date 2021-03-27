import { Router } from 'express'
import { check } from 'express-validator'
import CourseController from '../controllers/CourseController'
import validateHandler from '../helpers/validator'

const router = Router()

router.get('/', CourseController.findMany)
router.post(
  '/',
  check('course_name')
    .notEmpty()
    .withMessage('Must not be empty')
    .matches(/^[a-zA-z0-9 '"]+$/i),
  check('course_description').notEmpty().withMessage('Must not be empty'),
  check('teacherId').notEmpty().isNumeric(),
  validateHandler,
  CourseController.create
)

export default router
