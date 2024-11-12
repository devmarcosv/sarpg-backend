import { Request, Response } from 'express';
import { productsRouter } from '@/products/http/routes/products.route'
import { Router } from 'express'

  const routes = Router()

  routes.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Olá Dev!' })
  })

  routes.use('/products', productsRouter)

  export { routes }