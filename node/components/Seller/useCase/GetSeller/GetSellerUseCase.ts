import { Seller } from "../../Model/Seller";
import { SellerRepository } from "../../repositories/SellerRepository";

class GetSellerUseCase {
    constructor (private userRepository : SellerRepository){}
    execute (id: string){
        this.userRepository.find(id)
       
    }
}

export { GetSellerUseCase }