import { Router } from 'express'

import { getAllUsers } from '../controllers'

const router = Router()

router.get('/', getAllUsers)

export { router as userRouter }
