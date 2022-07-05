
import styles from "./styles.module.sass"

import { SaleBoardModal } from "../../components/SaleBoardModal";
import { Navbar } from "../../components/Navbar";
import { SaleBoard } from "../../components/SaleBoard";
import { Products } from "../../components/Products";

interface productsProps {
    id: number
}
export function StoreProducts(){
    const item = {
        nome: 'Leite Longa Vida',
        estoque: 30,
        valor: 9.90
    }
    return (
        <>
            <Navbar/>
            <div className={styles.container}> {/* global */}
                <div className={styles.limit}> {/* max-with: ; width:Editar00% */}
                    <div className={styles.content}> {/* centralizar a pagina */}
                        <div className={styles.boxOptions}>
                            <ul>
                                <li><a href="#">Bebidas</a></li>
                                <li><a href="#">Sobremesas</a></li>
                                <li><a href="#">Pratos</a></li>
                                <li><a href="#">Salgados</a></li>
                            </ul>
                        </div>
                        <div className={styles.gridProducts}>
                            <Products item={item}/>
                            <Products item={item}/>
                            <Products item={item}/>
                            <Products item={item}/>
                            <Products item={item}/>
                            <Products item={item}/>
                            <Products item={item}/>
                        </div>
                    </div>
                    <SaleBoard/>
                </div>
            </div>
        </>
    )
}