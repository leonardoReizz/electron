import { Request, response, Response } from "express";
import { ISale } from "../../Repositories/ISaleRepository";
import { SaleRepository } from "../../Repositories/SaleRepository";




class CreateSaleController {
    constructor (private saleRepository : SaleRepository ) {}
    async handle ( req: Request, res: Response ) {
        const data: ISale = req.body
        console.log(data)
        if(!data.idClient)
            return res.status(400).send("idClient is Required");
        if(!data.total)
            return res.status(400).send("total is Required");
        if(!data.formPayment)
            return res.status(400).send("formPayment is Required");
        if(!data.totalPaid)
            return res.status(400).send("totalPaid is Required");

        await this.saleRepository.create(data, res)
        

    }

}

export { CreateSaleController }