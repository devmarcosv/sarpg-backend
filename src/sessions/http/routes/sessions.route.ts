import { Router } from 'express'
import { createSessionController } from '../controllers/create-session.controller'
import { listSessionController } from '../controllers/list-session.controller'


    const sessionRouter = Router()

   
    sessionRouter.post('/', createSessionController)

    sessionRouter.get('/', listSessionController)



    export { sessionRouter }
