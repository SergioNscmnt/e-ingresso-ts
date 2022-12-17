import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
    name: string;
    email: string;
    password: string;
    cnpj: string;    
    address: string;
    age: number;
    cpf: string;
}

class CreateUserService{
    async execute({ name, email, password, cnpj, address, age, cpf }: UserRequest) {
        
        // verificar se enviou um e-mail

        if(!email){
            throw new Error("Email incorreto")
        }
        
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Este usuário já existe")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                cnpj: cnpj,
                address: address,
                age: age,
                cpf: cpf           
            },
            select:{
                id: true,
                email: true,
                name: true
            }
        })

        return user;
    }
}

export { CreateUserService }