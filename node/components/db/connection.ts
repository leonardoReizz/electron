import mysql from 'mysql'
class Connection {
    
    create() : mysql.Pool {
        const db =  mysql.createPool({
            host: "189.17.218.10",
            port: 53306,
            user: "oltmanager",
            password: "LIB-100-lib",
            database: "system"
        })

        return db
    }
}


export { Connection }