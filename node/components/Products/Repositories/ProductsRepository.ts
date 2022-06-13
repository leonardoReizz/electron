import { Response } from "express";
import { resolve } from "../../../../webpack/main.webpack";
import { Connection } from "../../db/connection";
import { Product } from "../Model/Product";
import { IProductsRepository } from "./IProductsRepository";


class ProductsRepository implements IProductsRepository {

    async create ( data: Product ) {
        let sqlQuery = 'INSERT INTO products SET ?'

        const db = new Connection().create();

        await new Promise(( resolve, reject ) =>
            db.query(sqlQuery, [data], ( err, result ) =>{
                if(err)
                    reject( err );
                resolve( result );
            }
        ))
        db.end();
    }

    async delete (id: number) {
        let sqlQuery = 'DELETE FROM products WHERE id = ?';
        const db = new Connection().create();

        await new Promise(( resolve , reject) => 
            db.query(sqlQuery,[id], ( err, result ) =>{
                if(err)
                    reject(err);
                resolve( result );
            }
        ))
        db.end();
    }

    async update (data: Product, id: number) : Promise<void> {
        let sqlQuery = 'UPDATE FROM products SET ? WHERE id = ?'
        const db = new Connection().create()

       
        db.query(sqlQuery,[data, id], ( err, result ) => {
            if(err)
                throw new Error(err.message)
        })
        db.end();
    }

    async list () : Promise<Product[]> {
        let sqlQuery = 'SELECT * FROM products';
        const db = new Connection().create()

        const result: Product[] = await new Promise (( resolve, reject) => 
            db.query(sqlQuery, ( err, result ) => {
                if(err)
                    reject ( err );
                resolve ( result );
            }       
        ))
        db.end();
        return result
    }

    findByCode ( code: string, res: Response ) {
        let sqlQuery = "SELECT * FROM products WHERE code = ?"
        const db = new Connection().create()

        db.query(sqlQuery, [code], ( err, result ) => {
            if(err)
                throw new Error(`${err}`)
            return result
        })
    }
}

export { ProductsRepository }