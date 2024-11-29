import { Request, Response } from 'express';
import { productsRouter } from '@/products/http/routes/products.route'
import { Router } from 'express'
import { usersRouter } from '@/users/http/routes/users.route';

  const routes = Router()

  routes.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Olá Dev!' })
  })

  routes.use('/products', productsRouter)
  routes.use('/users', usersRouter)
  routes.use('/sessions', usersRouter)
  routes.use('/personagem', usersRouter)




  export { routes }