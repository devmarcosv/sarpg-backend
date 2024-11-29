import { Router } from 'express'
import { createSessionController } from '../controllers/create-session.controller'
import { listSessionController } from '../controllers/list-session.controller'


    const charactersRouter = Router()


    charactersRouter.post('/', createSessionController)

   
    charactersRouter.get('/', listSessionController)



    export { charactersRouter }
