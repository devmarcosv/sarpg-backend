import { Router } from 'express'

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
     *           description: The user's name
     *         raca:
     *           type: string
     *           description: The user's raca
     *         classe:
     *           type: string
     *           description: The user's class
     *         nivel:
     *           type: string
     *           format: date-time
     *           description: The users character level
     *         status:
     *           type: string
     *           format: date-time
     *           description: The user character class status
     *         modificador:
     *           type: string
     *           format: date-time
     *           description: The status modifier
     *         habilidades:
     *           type: string
     *           description: The characters habilities
     *         itens:
     *           type: string
     *           description: The characters itens
     *         danos:
     *           type: string
     *           description: The character damage on itens or spells
     * 
     *       example:
     *         id: d3b07384-d113-11ed-afa1-0242ac120002
     *         nome: Orangotango
     *         raca: elfo
     *         classe: bardo
     *         nivel: 1
     *         status: ficha de atributos
     *         modificador: base nos atributos
     *         habilidades: correr, saltar, manejar espada, tocar alaude
     *         itens: alaude, adaga, caneco de cerveja
     *         danos: 1d4 adaga (perfurante), 1d4 alaude (contundente)
     */

    /**
     * @swagger
     * tags:
     *   name: cards
     *   description: API for managing users
     */

    /**
     * @swagger
     * /cards:
     *   post:
     *     summary: Create a new user
     *     tags: [Cards]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Cards'
     *     responses:
     *       201:
     *         description: User created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Cards'
     *       400:
     *         description: Bad request
     */

    /**
     * @swagger
     * /cards/{id}:
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
     *               $ref: '#/components/schemas/Card'
     *       404:
     *         description: User not found
     */

    export { usersRouter }
