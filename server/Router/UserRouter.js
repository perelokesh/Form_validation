import express from "express";
import UserController from '../Controller/UserController.js';

export const router = express.Router();
router.post('/users', UserController.createUser);
router.get('/users', UserController.viewUsers);
router.get('/users/:userId/edit', UserController.editUser);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);
