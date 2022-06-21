import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
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
                        <li className={styles.itemOptions}><a href="#">Bebidas</a></li>
                        <li className={styles.itemOptions}><a href="#">Sobremesas</a>
                        </li>
                        <li className={styles.itemOptions}><a href="#">Pratos</a></li>
                        <li className={styles.itemOptions}><a href="#">Salgados</a></li>
                    </ul>
                </div>
                <div className={styles.gridProducts}>
                    <link to="/home"/>
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
                    <Link/>
                </div>
            </div>
        </div>
    </div>
</>
)
}