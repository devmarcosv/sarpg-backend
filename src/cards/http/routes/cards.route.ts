import { Router } from 'express'
import { createCardController } from '../controllers/create-cards.controller'
import { getCardController } from '../controllers/get-cards.controller'

    const cardsRouter = Router()

   
    cardsRouter.post('/', createCardController)

    cardsRouter.get('/', getCardController)

    export { cardsRouter }
