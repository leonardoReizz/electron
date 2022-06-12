import { ISale } from "./ISaleRepository";
import fs from 'fs'
import { DataManager } from "discord.js";
import { Sale } from "../Model/Sale";
import { Connection } from "../../db/connection";
import { Query } from "mysql";
import { Response } from "express";
class SaleRepository {
    
    async create (data: Sale, res: Response) {
        let sqlInsert = 'INSERT INTO sales SET ?'

        const db = new Connection().create()
        
        const sale = new Sale()
        Object.assign(sale, data)  
        db.query(sqlInsert,[sale], ( err, result ) => {
            if(err)
               res.status(404).send(err)
            res.json(result)
            
            return result
        })
    }
    
    delete (id: number) {
        let sqlDelete = `delete from sales where id = ${id}`

        const db = new Connection().create()

        db.query(sqlDelete, ( err, result ) => {
            if(err)
                throw new Error(`${err}`)
            
            return result
        })
    }

    update (data: Sale, id: number, res: Response) {
        let sqlUpdate = 'UPDATE sales SET ? WHERE id = ?';
        data.updateAt = new Date()

        const db = new Connection().create();

        db.query(sqlUpdate,[data, id], ( err, result ) => {
            if(err)
                res.status(404).send(err)
            res.json(result)
        })
    }

    async list (res: Response) {
        let sqlList = `SELECT * FROM sales`

        const db = new Connection().create()
        
        db.query(sqlList, (err, result) =>{
            if(err)
                res.status(404).send(err)
            res.json(result)
        })
    }


}

export { SaleRepository }