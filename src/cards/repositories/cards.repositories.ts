import { Router } from 'express'
import { createCardsController } from '../controllers/create-cards.controller'
import { getCardsController } from '../controllers/get-cards.controller'

    const usersRouter = Router()

    /**
     * @swagger
     * components:
     *   schemas:
     *     Card:
     *       type: object
     *       required:
     *         - nome
     *         - raca
     *         - classe
     *         - nivel
     *         - status
     *         - modificador
     *         - habilidades
     *         - itens
     *         - danos
     *       properties:
     *         id:
     *           type: string
     *           description: The auto-generated ID of the user
     *         nome:
     *           type: string
     *           description: The characters name
     *         raca:
     *           type: string
     *           description: The characters race
     *         classe:
     *           type: string
     *           description: The characters class
     *         nivel:
     *           type: string
     *           format: date-time
     *           description: The characters level
     *         status:
     *           type: string
     *           format: date-time
     *           description: The characters status atributs
     *         modificador:
     *           type: string
     *           format: date-time
     *           description: The characters modifiers
     *         habilidades:
     *           type: string
     *           format: date-time
     *           description: The characters habilities
     *         itens:
     *           type: string
     *           format: date-time
     *           description: The characters itens
     *         danos:
     *           type: string
     *           format: date-time
     *           description: The characters damage dealers
     *
     *       example:
     *         id: d3b07384-d113-11ed-afa1-0242ac120002
     *         nome: John Doe
     *         raca: gnomo
     *         classe: ladino
     *         nivel: 1
     *         status: força, dex, wis
     *         modificadores: 1, -2, 3
     *         itens: adaga, bolsa com 10 po
     *         danos: adaga 1d4
     */

    /**
     * @swagger
     * tags:
     *   name: Cards
     *   description: API for managing Characters
     */

    /**
     * @swagger
     * /users:
     *   post:
     *     summary: Create a new character
     *     tags: [Cards]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       201:
     *         description: User created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       400:
     *         description: Bad request
     */
    usersRouter.post('/', createCardController)

    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Get a user by ID
     *     tags: [Cards]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The user's ID
     *     responses:
     *       200:
     *         description: User found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       404:
     *         description: User not found
     */
    usersRouter.get('/:id', getCardsController)

    export { cardsRouter }
