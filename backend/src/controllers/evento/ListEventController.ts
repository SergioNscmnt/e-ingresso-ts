import { Request, Response } from "express";
import { ListEventService } from "../../services/evento/ListEventService";

class ListEventController{
    async handle(req: Request, res: Response){
        const event_id = req.body;     

        const listEventService = new ListEventService();
        
        const event = await listEventService.execute(event_id);

        return res.json(event);

    }
}
export { ListEventController }