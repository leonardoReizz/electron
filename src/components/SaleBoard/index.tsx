
import { Link, link } from "react-router-dom";
import { Axios } from "axios";
import { access } from "original-fs";
import { useEffect, useMemo, useState } from "react";
import { useFilters, useSortBy, useTable } from "react-table";
import useColumns from "../../hooks/useColumns";
import styles from "./styles.module.sass";

export function SaleBoard() {
    const data  = useMemo(() => 
    [
        {
            "QT" : "1",
            "UN" : "22,90",
            "TOTAL" : "40,90",
            "PRODUTO" : "PIZZA"
        },
        {
            "QT" : "1",
            "UN" : "22,90",
            "TOTAL" : "40,90",
            "PRODUTO" : "Guarana"
        },
        {
            "QT" : "1",
            "UN" : "22,90",
            "TOTAL" : "40,90",
            "PRODUTO" : "Hamburger"
        },
        {
            "QT" : "1",
            "UN" : "22,90",
            "TOTAL" : "41,90",
            "PRODUTO" : "Coxinha"
        },
        {
            "QT" : "1",
            "UN" : "22,90",
            "TOTAL" : "42,90",
            "PRODUTO" : "Mae"
        }
    ]
    ,[] );
    
    const columns = useColumns();
    const table = useTable({ columns, data }, useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = table;
    
    
    return (
        <>
            <div className={ styles.container }>
                <div className={ styles.content }>
                    <h2>Venda #0001</h2>
                        <div className={styles.box}>
                            <div className={styles.boxNav}>
                                <button>
                                    <img src="" alt="" />
                                    Editarrr
                                </button>
                                <button>
                                    <img src="" alt="" />
                                    Deletar
                                </button>
                            </div>
                            <div className={styles.sale}>

                            
                                <div className={ styles.table }>
                                <table {...getTableProps()}>
                                    <thead>
                                    {headerGroups.map((headerGroup) => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            className={
                                                column.isSorted
                                                ? column.isSortedDesc
                                                    ? "desc"
                                                    : "asc"
                                                : ""
                                            }
                                            >
                                            {column.render("Header")}
                                            </th>
                                        ))}
                                        </tr>
                                    ))}
                                    </thead>

                                    <tbody {...getTableBodyProps()}>
                                    {
                                        rows.map((row) => {
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                            {
                                                row.cells.map((cell) => {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                    {
                                                        cell.render("Cell")
                                                    }
                                                    </td>
                                                );
                                                })
                                            }
                                            </tr>
                                        );
                                        })
                                    }
                                    </tbody>
                                </table>


                            </div>
<<<<<<< HEAD:src/components/SaleBord/index.tsx
                            <div className={ styles.finalBoard }>
                                <div className={ styles.subTotal }>
                                    <h3>Total</h3>
                                    <p>R$ 200,00</p>
                                </div>
                                <div className={ styles.subTotal }>
                                    <h3>Taxa</h3>
                                    <p>R$ 20,00</p>
                                </div>
                                <div className={ styles.total }>
                                    <h3>Total</h3>
                                    <p><span>R$</span> 220,00</p>
                                </div>
                                <div className={ styles.buttons }>
                                    <button> Finalizar </button>
                                    <button> Cancelar </button>
                                </div>
=======
                            <div className={ styles.subTotal }>
                                <h3>Taxa</h3>
                                <p>R$ 20,00</p>
                            </div>
                            <div className={ styles.total }>
                                <h3>Total</h3>
                                <p>R$ 220,00</p>
                            </div>
                            <div className={ styles.buttons}>
                                <Link to="/storeproducts">
                                    <button className={styles.btnFinish}> Finalizar </button>
                                </Link>
                                <button className={styles.btnCancel}> Cancelar </button>
>>>>>>> 621bba1d34380e23752e5905657071082564d9b1:src/components/SaleBoard/index.tsx
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}