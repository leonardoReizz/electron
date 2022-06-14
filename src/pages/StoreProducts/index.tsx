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
                    <div className={styles.limit}> {/* max-with: ; width:100% */}
                        <div className={styles.gridProducts}>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
                            <div className={styles.item}>
                                <h2>1</h2>
                            </div>
           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}