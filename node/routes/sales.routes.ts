import { Request, Response, Router } from "express"
import { createSaleController } from "../components/Sale/UseCases/CreateSale"
import { deleteSaleController } from "../components/Sale/UseCases/DeleteSale"
import { listSalesController } from "../components/Sale/UseCases/ListSales"
import { updateSaleController } from "../components/Sale/UseCases/UpdateSale"





const salesRouter = Router()


salesRouter.post("/", (req: Request, res: Response) => {
    return createSaleController.handle(req, res);
})

salesRouter.delete("/:id", (req: Request, res: Response) => {
    return deleteSaleController.handle(req, res);
})

salesRouter.get("/", (req: Request, res: Response) => {
    return listSalesController.handle(req, res);
})

salesRouter.put("/:id", (req: Request, res: Response) => {
    return updateSaleController.handle(req, res)
})

export { salesRouter }