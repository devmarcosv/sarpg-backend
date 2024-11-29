import { Router } from 'express'
import { createCharacterController } from '../controllers/create-character.controller'



    const charactersRouter = Router()


    charactersRouter.post('/', createCharacterController)

   


    export { charactersRouter }
