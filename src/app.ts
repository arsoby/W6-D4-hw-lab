import prisma from './config/db';
import express,{Application, Request, Response} from 'express';
import { createUser, deleteUser, findAllUser, updateUser } from './controller/user.controller';
const app:Application = express();
import userRouter from './routes/user.route';
let port:number = 3003;

app.use(express.json());

app.use("/user",userRouter)


app.listen(port,()=>console.log(`express started on port ${port}`));