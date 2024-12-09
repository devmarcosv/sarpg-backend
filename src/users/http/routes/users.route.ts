import { Router } from 'express'
import { createUserController } from '../controllers/create-user.controller'
import { getUserController } from '../controllers/get-user.controller'
import { listUserController } from '../controllers/list-user.controller'
import { updateUserController } from '../controllers/update-user.controller'
import { deleteUserController } from '../controllers/delete-user.controller'

    const usersRouter = Router()

    usersRouter.post('/', createUserController)


    usersRouter.get('/', getUserController)

    usersRouter.get('/:id', listUserController)
    usersRouter.put('/:id', updateUserController)
    usersRouter.delete('/:id', deleteUserController)




    export { usersRouter }
