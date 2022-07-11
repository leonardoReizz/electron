
import { useState } from "react";

import { Navbar } from "../../components/Navbar";
import { SaleBoard } from "../../components/SaleBoard";
import { Products } from "../../components/Products";

import styles from "./styles.module.sass"


interface productsProps {
    id: number
}
export interface IItem  {
    nome: string
    estoque: number
    valor: number
}
export function Inventory(){
    const item = {
        nome: 'Leite Longa Vida',
        estoque: 30,
        valor: 9.90
    }
     
    const [listItems, setListItems ] = useState<IItem[]>([]);
    const [listBuyItems, setListBuyItems] = useState([]);

    function handleClickProduct(item: IItem){
        setListItems([...listItems, item])
    }
    function handleAddProduct(id: number){
        //SetListItems
    }
    return (
        <>
            <Navbar/>
            <div className={styles.container}> {/* global */}
                <div className={styles.limit}> {/* max-with: ; width:Editar00% */}
                    <div className={styles.content}> {/* centralizar a pagina */}
                        <div className={styles.boxOptions}>
                            <ul>
                                <li onClick={()=>handleAddProduct(1)}>Adicionar Produto</li>
                            </ul>
                        </div>
                        <div className={styles.gridProducts}>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>
                            <Products item={item} handleClickProduct = {handleClickProduct}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}