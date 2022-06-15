
import  Axios  from "axios"
import { useCallback, useEffect, useState } from "react"
import styles from "./styles.module.sass"

interface productsProps{
    id:number
    nameProduct:string
}


export function StoreProducts(){
    const[res, setRes] = useState<productsProps>()

    const getProducts=useCallback(async()=>{
        await Axios.get("http://localhost:3333/products/")
        .then((resposta) => {
            console.log(resposta.data)
            setRes(resposta.data)})
    },[])

    useEffect(()=>{
        document.title = "O Titulo da Pagina"
        getProducts()
        console.log(res?.nameProduct)
    },[getProducts])
    return (
        <> 
            <div className={styles.container}> {/* global */}
                <div className={styles.content}> {/* centralizar a pagina */}
                    <div className={styles.limit}> {/* max-with: ; width:Editar00% */}

                        <div className={styles.boxOptions}>
                            <ul className={styles.listOptions}>
                                <li className={styles.itemOptions}><a href="https://youtu.be/gkTb9GP9lVI?t=26">Bebidas</a></li>
                                <li className={styles.itemOptions}><a href="https://youtu.be/gkTb9GP9lVI?t=26">Sobremesas</a></li>
                                <li className={styles.itemOptions}><a href="https://youtu.be/gkTb9GP9lVI?t=26">Pratos</a></li>
                                <li className={styles.itemOptions}><a href="https://youtu.be/gkTb9GP9lVI?t=26">Salgados</a></li>
                            </ul>

                        </div>

                        {
                            res?.id + " " + res?.nameProduct     
                        }
                        <div className={styles.gridProducts}>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>Editar</h2>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


