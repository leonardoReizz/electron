import { Request, Response } from "express";
import { SaleRepository } from "../../Repositories/SaleRepository";

class DeleteSaleController {
    constructor( private saleRepository : SaleRepository ) {}


    handle (req: Request, res: Response) {
        const { id } = req.params
        if(!id)
            res.status(400).send("ID Sale is Required")
        

        const idDelete = parseInt(id)

        const result = this.saleRepository.delete(idDelete)
       
        res.status(200).send(result)
    }

}

export { DeleteSaleController }