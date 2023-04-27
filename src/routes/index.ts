import { Request, Response, Router } from 'express'

import { userRouter } from './user.routes'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    server: 'Server running!'
  })
})

router.use('/user', userRouter)

export { router }
