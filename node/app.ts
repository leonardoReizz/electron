
import express from 'express'
import { routes } from './routes/routes'
import cors from "cors"
class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.routes()
        this.middlewares()
    }

    private middlewares () : void {
        this.express.use(cors())
        this.express.use(express.json())
    } 

    private routes () : void {
        this.express.use(routes)
    }

}

export default new App().express    

