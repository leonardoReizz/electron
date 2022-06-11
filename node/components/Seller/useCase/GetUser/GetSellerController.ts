
import { GetSellerUseCase } from "./GetSellerUseCase";
import { Request, Response } from 'express';
import { Seller } from "../../Model/Seller";

class GetSellerController {
    constructor ( private getUserUseCase : GetSellerUseCase){}
    handle (req: Request, res: Response) {
        const { id } = req.body
        
        this.getUserUseCase.execute(id)
        

        return res.status(201).send()
    
    }

}


export { GetSellerController }