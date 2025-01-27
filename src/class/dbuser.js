import { PrismaClient } from "@prisma/client" 

const prisma = new PrismaClient()

async function createUser(name, email){
     await prisma.user.create({
        data:{
            name: name,
            email: email
        }
        })


} 

async function getUser(){
    const users = await prisma.user.findMany()
    console.log(users)
    return users
}


async function getOneUser(id){
    const user = await prisma.user.findUnique({
        where:{
            id: id
        }
    })

    return user
}

export {createUser, getUser, getOneUser}

