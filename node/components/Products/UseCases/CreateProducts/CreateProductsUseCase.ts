import { Product } from "../../Model/Product";
import { ProductsRepository } from "../../Repositories/ProductsRepository";
import { ICreateProductsRequestDTO } from "./CreateProductsRequestDTO";

class CreateProductsUseCase {
    constructor ( private productsRepository : ProductsRepository ) {}
    async execute ( data: ICreateProductsRequestDTO ) {

        if (!data.nameProduct )
            throw new Error ("Invalid Name")
        if( !data.codebar )
            throw new Error( "Invalid Code" )
        
        const product = new Product( data );
        
        await this.productsRepository.create( product );
    }
}

export { CreateProductsUseCase }