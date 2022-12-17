import { Request, Response } from "express";
import { CreateEventService } from '../../services/evento/CreateEventService'

class CreateEventController{
    async handle(req: Request, res: Response){

        const { name, price, description, category_id } = req.body;        

        const createEventService = new CreateEventService();

        if(!req.file){
            throw new Error("Erro ao carregar foto")
        }
        else
        {
        
        const { originalname, filename: banner } = req.file;  
        
        const event = await createEventService.execute({
            name,
            price, 
            description,
            banner,
            category_id
        });

        return res.json(event);
        }
    }
}

export { CreateEventController }