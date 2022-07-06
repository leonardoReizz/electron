
import { useState } from "react";
import styles from "./styles.module.sass"    
    
export function SaleBoardItem() {

    const [amount, setAmount] = useState<number>(1);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                 <div className={styles.header}>
                        <div>
                            <img src="https://st4.depositphotos.com/4366637/21927/i/600/depositphotos_219272122-stock-photo-brazilian-feijoada-food-top-view.jpg" alt="" />
                            <div>
                                <h3>Feijoada Mineira</h3>
                                <p>R$22.50</p>
                            </div>
                        </div>
                        <div className={styles.amount}>
                            <input 
                                type="text" 
                                value={amount}
                                onChange={(e)=>setAmount(Number(e.target.value))}
                            />
                            <h3>R$22.50</h3>
                        </div>
                    </div>
                <div className={styles.observation}>
                    <input 
                        type="text" 
                        placeholder="Observações..."
                    />
                </div>
            </div>
        </div>
    );  
}