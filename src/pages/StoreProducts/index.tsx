import styles from "./styles.module.sass"
import { useEffect } from "react"
import { SaleBoardModal } from "../../components/SaleBordModal";
import { useModal } from "../../context/useModal";
import { SaleBoard } from "../../components/SaleBoard";

export function StoreProducts(){
    const{isOpenModal, openModal, closeModal} = useModal();

    useEffect(()=>{
        document.title = "O Titulo da Pagina"
    },[])

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