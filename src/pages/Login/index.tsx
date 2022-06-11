import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "../../components/Navbar"

import styles from "./styles.module.sass"


export function Login(){
    useEffect(()=>{
        document.title = "System - Entrar"
    },[])
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.limit}>
                        <h1>SoftSystem</h1>
                        <form action="">
                            <input 
                            type="text" 
                            placeholder="Usuario"
                            
                            />
                            <input 
                            type="password" 
                            placeholder="Senha"
                            />
                            <button>Login</button>
                        </form>  
                    </div>
                </div>
            </div>
        </>


    )
}