import { SaleRepository } from "../../Repositories/SaleRepository";
import { DeleteSaleController } from "./DeleteSaleController";

const saleRepository = new SaleRepository
const deleteSaleController = new DeleteSaleController(saleRepository)

export { deleteSaleController }