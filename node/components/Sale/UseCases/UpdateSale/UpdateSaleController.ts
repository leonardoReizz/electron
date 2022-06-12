import { Request, Response } from "express";
import { SaleRepository } from "../../Repositories/SaleRepository";

class UpdateSaleController{
    constructor ( private saleRepository : SaleRepository){}
    handle (req: Request, res: Response ) {
        const { id } = req.params
        const data = req.body

        if(!id)
            return res.status(404).send("ID is Required")
        if(!data.idClient)
            return res.status(400).send("idClient is Required");
        if(!data.total)
            return res.status(400).send("total is Required");
        if(!data.formPayment)
            return res.status(400).send("formPayment is Required");
        if(!data.totalPaid)
            return res.status(400).send("totalPaid is Required");


        const idUpdate = parseInt(id)
        this.saleRepository.update(data, idUpdate, res)
    }

}

export { UpdateSaleController }