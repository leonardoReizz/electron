import styles from "./styles.module.sass";

interface ProductsProps{
    item:{
        nome: string,
        valor: number,
        estoque: number
    }
}

export function Products({item}: ProductsProps){
    return (
        <div className={styles.item}>
            <img src="" alt="" />
            <div className={styles.itemContent}>
                <h3>{item.nome}</h3>
                <div className={styles.info}>
                    <p>R${item.valor}</p>
                    <p>{item.estoque} Estoque</p>
                </div>
            </div>
        </div>
    )
}