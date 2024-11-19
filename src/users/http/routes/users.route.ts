import { Router } from 'express'
import { createUserController } from '../controllers/create-user.controller'
import { getUserController } from '../controllers/get-user.controller'

    const usersRouter = Router()

    /**
     * @swagger
     * components:
     *   schemas:
     *     User:
     *       type: object
     *       required:
     *         - name
     *         - password
     *         - email
     *       properties:
     *         id:
     *           type: string
     *           description: The auto-generated ID of the user
     *         name:
     *           type: string
     *           description: The user's name
     *         password:
     *           type: string
     *           description: The user's password
     *         email:
     *           type: string
     *           description: The user's email
     *         created_at:
     *           type: string
     *           format: date-time
     *           description: The date the user was created
     *       example:
     *         id: d3b07384-d113-11ed-afa1-0242ac120002
     *         name: John Doe
     *         password: hash123
     *         email: john.doe@example.com
     *         created_at: 2023-01-01T10:00:00Z
     */

    /**
     * @swagger
     * tags:
     *   name: Users
     *   description: API for managing users
     */

    /**
     * @swagger
     * /users:
     *   post:
     *     summary: Create a new user
     *     tags: [Users]
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
    usersRouter.post('/', createUserController)

    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Get a user by ID
     *     tags: [Users]
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
    usersRouter.get('/:id', getUserController)

    export { usersRouter }
