import { SaleRepository } from "../../Repositories/SaleRepository"
import { CreateSaleController } from "./CreateSaleController"



const saleRepository = new SaleRepository()
const createSaleController = new CreateSaleController(saleRepository)


export { createSaleController }