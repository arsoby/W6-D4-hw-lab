import express, { Router } from 'express';
import { createUser, deleteUser, findAllUser, updateUser } from '../controller/user.controller';
const router=express.Router()


//read
router.get('',findAllUser);

//create
router.post('',createUser);

//update
router.put('/:id',updateUser); 

//delete
router.delete('/:id',deleteUser); 

export default router