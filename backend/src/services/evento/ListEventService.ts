import prismaClient from "../../prisma";

class ListEventService{
    async execute(name: string){
        const event = await prismaClient.event.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true
            }
        })
        return event;
        
    }
}

export { ListEventService }