import { Connection } from "../../db/connection";
import { Seller } from "../Model/Seller";
import { ISellerRepository } from "./ISellerRepository";
class SellerRepository implements ISellerRepository{
    async login (data : Seller ) : Promise<Seller[]> {
        let sqlQuery = "SELECT * FROM sellers where username = ? and pass = ?"
        const db = new Connection().create();

        const result: Seller[] = await new Promise(( resolve, reject ) =>  {
            db.query(sqlQuery, [data.username, data.pass], (err, result ) =>{
                if( err )
                    reject( err );
                resolve( result );
            } )
        })
        return result
    }
}

export { SellerRepository }