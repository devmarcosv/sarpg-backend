import { Router } from 'express'
import { createCharacterController } from '../controllers/create-character.controller'
import { getCharacterController } from '../controllers/get-character.controller'
import { deleteCharacterController } from '../controllers/delete-character.controller'



    const charactersRouter = Router()


    charactersRouter.post('/', createCharacterController)
    charactersRouter.get('/', getCharacterController)
    charactersRouter.delete('/:id', deleteCharacterController)

    

   


    export { charactersRouter }
