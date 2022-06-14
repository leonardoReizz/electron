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
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h2>Caixa</h2>
                                <p>Seu painel de vendas</p>
                            </div>
                        </div>  
                    </Link>     
                </div>
            </div>  
        </>
    )
}


