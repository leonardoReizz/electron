<<<<<<< HEAD

import axios from "axios"
import { useEffect, useState } from "react"
=======
>>>>>>> 621bba1d34380e23752e5905657071082564d9b1
import styles from "./styles.module.sass"
import { useEffect } from "react"
import { SaleBoardModal } from "../../components/SaleBordModal";
import { useModal } from "../../context/useModal";
import { SaleBoard } from "../../components/SaleBoard";


interface productsProps {
    id: number
}

export function StoreProducts(){
<<<<<<< HEAD

   
=======
    const{isOpenModal, openModal, closeModal} = useModal();

    useEffect(()=>{
        document.title = "O Titulo da Pagina"
    },[])

>>>>>>> 621bba1d34380e23752e5905657071082564d9b1
    return (
        <>
        <SaleBoardModal/>
        <SaleBoard/>
            <div className={styles.container}> {/* global */}
                    <div className={styles.content}> {/* centralizar a pagina */}
                        <div className={styles.limit}> {/* max-with: ; width:Editar00% */}
                            <div className={styles.boxOptions}>
                                <ul className={styles.listOptions}>
                                    <li className={styles.itemOptions}><a href="#">Bebidas</a></li>
                                    <li className={styles.itemOptions}><a href="#">Sobremesas</a></li>
                                    <li className={styles.itemOptions}><a href="#">Pratos</a></li>
                                    <li className={styles.itemOptions}><a href="#">Salgados</a></li>
                                </ul>
                            </div>
                            <div className={styles.gridProducts}>

                                <button onClick={openModal}>
                                    <div className={styles.item}>
                                        <h2>Editar</h2>
                                    </div>
                                </button>

<<<<<<< HEAD
                        <div className={styles.gridProducts}>
                            <div className={styles.item}>
                                <h2>
                                   editar
                                </h2>
=======
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
>>>>>>> 621bba1d34380e23752e5905657071082564d9b1
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}