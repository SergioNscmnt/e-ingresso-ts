import { Request, Response } from "express";
import { DeleteEventService } from "../../services/evento/DeleteEventService"

class DeleteEventController{
    async handle(req: Request, res: Response){

        const event_id = req.query.event_id as string;

        const deleteEventService = new DeleteEventService()

        const event = await deleteEventService.execute({ event_id })

        res.json(event);
    }
}
export { DeleteEventController }