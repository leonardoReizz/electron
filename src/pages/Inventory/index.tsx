
import { useEffect, useState } from "react";

import { Navbar } from "../../components/Navbar";
import { SaleBoard } from "../../components/SaleBoard";
import { Products } from "../../components/Products";
import { darken, lighten } from '@mui/material/styles';

import styles from "./styles.module.sass"

import { MdAddCircle } from "react-icons/md";
import { ProductsList } from "../../components/ProductsList";
import { DataGrid } from "@mui/x-data-grid";
import { columns, data } from "./data";

import { GrAdd }  from "react-icons/gr"
import { style } from "@mui/system";
import axios from "axios";


interface productsProps {
    id: number
}
export interface IItem  {
    nome: string
    estoque: number
    valor: number
}
export interface IItemTest  {
    id: string
    name: string
    barcode: string
    puchasePrice: number,
    saleValue: number
    createdAt: string,
    updatedAt: string
    amount: number
}
export function Inventory(){
    const [items, setItems] = useState<IItemTest[]>([]);
    const item = {
        nome: 'Leite Longa Vida',
        estoque: 30,
        valor: 9.90
    }
     
    useEffect(() => {
        console.log('ola')
        axios.get("http://localhost:3333/products")
        .then((res)=>{
            setItems(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    
    const [listItems, setListItems ] = useState<IItem[]>([]);
    const [listBuyItems, setListBuyItems] = useState([]);

    function handleClickProduct(item: IItem){
        setListItems([...listItems, item])
    }
    function handleAddProduct(id: number){
        //SetListItems
    }
    const getBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);
    return (
        <>
            <Navbar/>
            <div className={styles.container}> {/* global */}
                <div className={styles.limit}> {/* max-with: ; width:Editar00% */}
                    <div className={styles.content}> {/* centralizar a pagina */}
                        <div className={styles.menu}>
                            <input 
                                type="text" 
                                placeholder="Mercadoria, codigo, referencia, grupos..."
                            /> 
                            <div className={styles.menuBox}>
                                <button>
                                    <div className={styles.svg}>
                                        <GrAdd/>
                                    </div>
                                    <div className={styles.buttonText}>
                                        <h2> Novo </h2>
                                        <p> Cadastrar uma nova mercadoria. </p>
                                    </div>
                                </button>
                                <button>
                                    <div className={styles.svg}>
                                        <GrAdd color="#9757D7"/>
                                    </div>
                                    <div className={styles.buttonText}>
                                        <h2> Ajuste </h2>
                                        <p> Editar ou Remover.</p>
                                    </div>
                                </button>
                                <button>
                                    <div className={styles.svg}>
                                        <GrAdd color="#9757D7"/>
                                    </div>
                                    <div className={styles.buttonText}>
                                        <h2> Balanço </h2>
                                        <p> Alterar estoque. </p>
                                    </div>
                                </button>
                            </div>   
                            <div className={styles.reports}>
                                <div className={styles.reportsTitle}>
                                    Relatório Sintetico Estoque 
                                </div>    
                                <div className={styles.reportsContent}>
                                    <div className={styles.reportsContentItem}>
                                        <p>Total de mercadorias</p>
                                        <p> 1290</p>
                                    </div>
                                    <div className={styles.reportsContentItem}>
                                        <p>Total de mercadorias</p>
                                        <p> 1290</p>
                                    </div>
                                    <div className={styles.reportsContentItem}>
                                        <p>Total de mercadorias</p>
                                        <p> 1290</p>
                                    </div>

                                </div> 
                            </div> 
                        </div>
                        
                        
                        <div className={styles.datagrid}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Referencia</th>
                                        <th>Valor de Compra</th>
                                        <th>Valor de Venda</th>
                                        <th>Data de Criacão</th>
                                        <th>Ultima Atualizacao</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map((item)=>{
                                            return (
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.barcode}</td>
                                                    <td>{item.puchasePrice}</td>
                                                    <td>{item.saleValue}</td>
                                                    <td>{item.createdAt}</td>
                                                    <td>{item.updatedAt}</td>
                                                    <td>{item.amount}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}