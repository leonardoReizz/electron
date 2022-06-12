import { Request, Response } from "express";
import { SaleRepository } from "../../Repositories/SaleRepository";

class ListSalesController {
    constructor ( private saleRepository : SaleRepository ) {}

    handle (req: Request, res: Response ) {
        this.saleRepository.list(res)

    }
}

export { ListSalesController }