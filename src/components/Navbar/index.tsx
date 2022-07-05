import { Link } from "react-router-dom"
import styles from "./styles.module.sass"

import exitIcon from "../../../public/assets/navbar/exit.png"
import cashRegisterIcon from "../../../public/assets/navbar/cash-register.png"
import deliveryIcon from "../../../public/assets/navbar/delivery.png"
import chairIcon from "../../../public/assets/navbar/chair.png"
import clientIcon from "../../../public/assets/navbar/client.png"
import inventoryIcon from "../../../public/assets/navbar/inventory.png"
import repostsIcon from "../../../public/assets/navbar/reposts.png"
import { UserInfo } from "../UserInfo"


export function Navbar(){
    return (
        <>
            <UserInfo/>
            <div className={styles.container}>
                <div className={styles.limit}>
                <div className={styles.content}>
                    <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <h2>LOGO</h2>
                    </div> 
                    <Link to="/storeproducts">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src={cashRegisterIcon} alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Caixa</h2>
                                <p>Seu painel de vendas</p>
                            </div>
                        </div>  
                    </Link>
                    <Link to="/delivery">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src={deliveryIcon} alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Delivery</h2>
                                <p>Seu painel de pedidos</p>
                            </div>
                        </div>  
                    </Link>   
                    <Link to="/tables">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src={chairIcon} alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Mesas</h2>
                                <p>Seu painel de mesas</p>
                            </div>
                        </div>  
                    </Link> 
                    <Link to="/clients">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src={clientIcon} alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Clientes</h2>
                                <p>Seu registro de clientes</p>
                            </div>
                        </div>  
                    </Link> 
                    <Link to="/inventory">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src={inventoryIcon} alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Estoque</h2>
                                <p>Veja seu estoque</p>
                            </div>
                        </div>  
                    </Link> 
                    <Link to="/reports">
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <img src={repostsIcon} alt="" />
                            </div>
                            <div className={styles.boxTitle}>
                                <h2>Relatorios</h2>
                                <p>Seu relatório de vendas</p>
                            </div>
                        </div>  
                    </Link>  
                    </div>
                    </div>  
                </div>
            </div>  
        </>
    )
}


