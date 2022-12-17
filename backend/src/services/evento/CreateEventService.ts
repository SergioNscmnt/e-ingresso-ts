import { Request, Response } from "express";
import prismaClient from "../../prisma";

interface EventRequest {
  name: string,
  price: string,
  description: string,
  banner: string,
  category_id: string
}

class CreateEventService{
    async execute({ name, price, description, banner, category_id }: EventRequest){
        const event = await prismaClient.event.create({
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            }
        })
        return event;
    }
}

export { CreateEventService }