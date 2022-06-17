

import { Axios } from "axios";
import { access } from "original-fs";
import { useEffect, useMemo, useState } from "react";
import { useFilters, useSortBy, useTable } from "react-table";
import useColumns from "../../hooks/useColumns";
import styles from "./styles.module.sass";

export function SaleBord() {
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
                    <h1></h1>
                    <div className={ styles.board }>
                        <div className={ styles.navBoard }></div>
                        <div className={ styles.tableBoard }>
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
                                <p>R$ 220,00</p>
                            </div>
                            <div className={ styles.buttons}>
                                <button className={styles.btnFinish}> Finalizar </button>
                                <button className={styles.btnCancel}> Cancelar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}