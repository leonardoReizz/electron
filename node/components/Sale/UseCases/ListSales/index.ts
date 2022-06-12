import { Sale } from "../../Model/Sale";
import { SaleRepository } from "../../Repositories/SaleRepository";
import { ListSalesController } from "./ListSalesController";


const saleRepository = new SaleRepository()

const listSalesController = new ListSalesController(saleRepository)

export { listSalesController } 