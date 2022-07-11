import { useEffect, useState } from "react";
import { array } from "yup";
import { IItem } from "../../pages/StoreProducts";
import { SaleBoardItem } from "./SaleBoardItem";
import styles from "./styles.module.sass";

interface SaleBoardProps{
    listItems: IItem[];
}

export function SaleBoard({listItems}: SaleBoardProps){
    const [option, setOption] = useState<number>(1)
    const [desconto, setDesconto] = useState<string>("R$0.00")
    const [array, setArray] = useState<string[]>([]);
    const [total, setTotal] = useState<number>();

    useEffect(() => {
        let totalMap = 0
        listItems.map((item)=>{
            totalMap = totalMap + item.valor;
        })
        handleAmount(totalMap);
    }, [listItems])
    
    function handleAmount(value: number){
        const numberAmount = Number(value);
        const rounded = Math.round(numberAmount * 1e8) / 1e8;
        setTotal(rounded);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.buttons}>
                    <button
                        className={option === 1 && styles.selected}
                        onClick={()=>setOption(1)}
                    >
                        Comer Aqui
                    </button>
                    <button
                        className={option === 2 && styles.selected}
                         onClick={()=>setOption(2)}
                    >
                        Para Viagem
                    </button>
                    <button
                        className={option === 3 && styles.selected}
                        onClick={()=>setOption(3)}
                    >
                        Delivery
                    </button>
                </div>
                {
                    listItems.map((item)=>{
                        return(
                            <SaleBoardItem item={item}/>
                        )
                    })
                }
            </div>
            <div className={styles.footer}>
                <div>
                    <h4>Desconto</h4>
                    <input
                        value={desconto}
                        onChange={(e)=>setDesconto(e.target.value)}
                    ></input>
                </div>
                <div>
                    <h4>Total</h4>
                    <h3>R$ {total}</h3>
                </div>
                <button>Continuar para pagamento</button>
            </div>
        </div>
    );
}