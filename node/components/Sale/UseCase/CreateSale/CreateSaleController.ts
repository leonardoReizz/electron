import { Request, Response } from "express";
import { ISale } from "../../Repositories/ISaleRepository";
import { CreateSaleUseCase } from "./CreateSaleUseCase";




class CreateSaleController {
    constructor (private createSaleUseCase : CreateSaleUseCase ) {}
    handle ( req: Request, res: Response ) {
        const data: ISale = req.body

        this.createSaleUseCase.execute(data)
    }

}

export { CreateSaleController }