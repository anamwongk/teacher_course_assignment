import { Router } from 'express'
import { check } from 'express-validator'
import TeacherController from '../controllers/TeacherController'
import validateHandler from '../helpers/validator'

const router = Router()

router.get('/', TeacherController.findMany)
router.post(
  '/',
  check('first_name')
    .notEmpty()
    .withMessage('Must not be empty')
    .matches(/^[a-zA-z]+$/i),
  check('last_name')
    .notEmpty()
    .withMessage('Must not be empty')
    .matches(/^[a-zA-z]+$/i)
    .withMessage('Invalid value'),
  check('birthday').notEmpty().isDate(),
  validateHandler,
  TeacherController.create
)

export default router
