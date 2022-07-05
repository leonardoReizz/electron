
import styles from "./styles.module.sass"

import { SaleBoardModal } from "../../components/SaleBoardModal";


interface productsProps {
    id: number
}
export function StoreProducts(){
    return (
        <>
        <SaleBoardModal/>
            <div className={styles.storeContainer}> {/* global */}
                <div className={styles.storeContent}> {/* centralizar a pagina */}
                    <div className={styles.storeLimit}> {/* max-with: ; width:Editar00% */}
                        <div className={styles.boxOptions}>
                            <ul>
                                <li><a href="#">Bebidas</a></li>
                                <li><a href="#">Sobremesas</a></li>
                                <li><a href="#">Pratos</a></li>
                                <li><a href="#">Salgados</a></li>
                            </ul>
                        </div>
                        <div className={styles.gridProducts}>
                              
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.itemContent}>
                                    <h3>Leite Longa Vida</h3>
                                    <div className={styles.info}>
                                        <p>$2.69</p>
                                        <p>30 Estoque</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.itemContent}>
                                    <h3>Leite Longa Vida</h3>
                                    <div className={styles.info}>
                                        <p>$2.69</p>
                                        <p>30 Estoque</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.itemContent}>
                                    <h3>Leite Longa Vida</h3>
                                    <div className={styles.info}>
                                        <p>$2.69</p>
                                        <p>30 Estoque</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.itemContent}>
                                    <h3>Leite Longa Vida</h3>
                                    <div className={styles.info}>
                                        <p>$2.69</p>
                                        <p>30 Estoque</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.itemContent}>
                                    <h3>Leite Longa Vida</h3>
                                    <div className={styles.info}>
                                        <p>$2.69</p>
                                        <p>30 Estoque</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}