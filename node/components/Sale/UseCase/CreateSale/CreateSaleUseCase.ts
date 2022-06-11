import { ISale } from "../../Repositories/ISaleRepository";
import { SaleRepository } from "../../Repositories/SaleRepository";

class CreateSaleUseCase {
    constructor ( private saleRepository : SaleRepository) {}
    execute (data: ISale ) {
        this.saleRepository.create(data)
        
    }
}

export { CreateSaleUseCase }