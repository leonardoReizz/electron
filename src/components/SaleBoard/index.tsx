import { useState } from "react";
import { SaleBoardItem } from "./SaleBoardItem";
import styles from "./styles.module.sass";



export function SaleBoard(){
    const [option, setOption] = useState<number>(1)
    const [desconto, setDesconto] = useState<string>("R$0.00")
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

                <SaleBoardItem/>
                <SaleBoardItem/>
                <SaleBoardItem/>
                <SaleBoardItem/>
                <SaleBoardItem/>
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
                    <h3>R$ 0,00</h3>
                </div>
                <button>Continuar para pagamento</button>
            </div>
        </div>
    );
}