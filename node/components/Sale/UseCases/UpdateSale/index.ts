import { SaleRepository } from "../../Repositories/SaleRepository";
import { UpdateSaleController } from "./UpdateSaleController";



const saleRepository = new SaleRepository()

const updateSaleController = new UpdateSaleController(saleRepository)

export { updateSaleController }