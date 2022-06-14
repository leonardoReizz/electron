import { Link } from "react-router-dom"
import styles from "./styles.module.sass"

export function Navbar(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <h2>LOGO</h2>
                    </div> 
                    <Link to="/storeproducts">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src="" alt="" />a
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Caixa</h2>
                                <p>Seu painel de vendas</p>
                            </div>
                        </div>  
                    </Link>
                    <Link to="/storeproducts">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Delivery</h2>
                                <p>Seu painel de pedidos</p>
                            </div>
                        </div>  
                    </Link>   
                    <Link to="/storeproducts">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Mesas</h2>
                                <p>Seu painel de mesas</p>
                            </div>
                        </div>  
                    </Link> 
                    <Link to="/storeproducts">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Clientes</h2>
                                <p>Seu registro de clientes</p>
                            </div>
                        </div>  
                    </Link> 
                    <Link to="/storeproducts">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Estoque</h2>
                                <p>Veja seu estoque</p>
                            </div>
                        </div>  
                    </Link> 
                    <Link to="/storeproducts">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Relatorios</h2>
                                <p>Seu relatório de vendas</p>
                            </div>
                        </div>  
                    </Link>    
                </div>
            </div>  
        </>
    )
}


