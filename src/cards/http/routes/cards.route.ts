import { Router } from 'express'
import { createCardController } from '../controllers/create-cards.controller'
import { getCardsController } from '../controllers/get-cards.controller'

    const cardsRouter = Router()

   
    cardsRouter.post('/:id', createCardController)

    cardsRouter.get('/:id', getCardsController)

    export { cardsRouter }
