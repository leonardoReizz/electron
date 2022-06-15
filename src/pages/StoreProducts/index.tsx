
import { useEffect } from "react"
import styles from "./styles.module.sass"

export function StoreProducts(){
    useEffect(()=>{
        document.title = "O Titulo da Pagina"
    },[])
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


