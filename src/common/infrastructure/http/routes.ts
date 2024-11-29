import { Request, Response } from 'express';
import { productsRouter } from '@/products/http/routes/products.route'
import { Router } from 'express'
import { usersRouter } from '@/users/http/routes/users.route';
import { sessionRouter } from '@/sessions/http/routes/sessions.route';
import { cardsRouter } from '@/cards/http/routes/cards.route';
import { charactersRouter } from '@/characters/http/routes/character.route';

  const routes = Router()

  routes.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Olá Dev!' })
  })

  routes.use('/products', productsRouter)
  routes.use('/users', usersRouter)
  routes.use('/sessions', sessionRouter)
  routes.use('/personagem', charactersRouter)
  routes.use('/ficha', cardsRouter)





  export { routes }