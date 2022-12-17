import prismaClient from "../../prisma";

interface EventRequest{
    event_id: string
}

class DeleteEventService {
    async execute({ event_id }: EventRequest){
        const event = await prismaClient.event.delete({
            where: {
                id: event_id
            }            
        })
        return event;    
    }
}

export { DeleteEventService }