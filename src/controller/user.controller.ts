import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  try {
    const users = req.body;
    const user = await prisma.user.create({
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const findAllUser = async (req: Request, res: Response) => {
//   let users = await prisma.users.findMany();
//   console.log(users);
//   res.json(users);
// };

// export const createUser = async (req: Request, res: Response) => {
//   try {
//     let user = await prisma.users.create({
//       data: {
//         full_name: req.body.name,
//         country_id: 10,
//       },
//     });
//     res.json({ msg: "user created", user: user });
//   } catch (e) {
//     res.send(e);
//   }
// };

// export const updateUser=async (req:Request,res:Response)=>{
//     let user = await prisma.users.update({
//         where:{
//             id: parseInt(req.params.id)
//         },
//         data:{
//             full_name: req.body.name
//         }
//     });
//     res.json({"msg": "user updated", "user":user});
// }

// export const deleteUser= async (req:Request,res:Response)=>{
//     let user = await prisma.users.delete({
//         where:{
//             id: parseInt(req.params.id)
//         }
//     });
//     res.json({"msg": "user deleted", "user":user});
// }
