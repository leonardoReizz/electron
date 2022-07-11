import styles from "./styles.module.sass";

interface item  {
    nome: string
    estoque: number
    valor: number
}
interface ProductsProps{
    item:{
        nome: string,
        valor: number,
        estoque: number
    }
    handleClickProduct(item: item): void
}



export function Products({item, handleClickProduct}: ProductsProps){
    return (
        <div className={styles.item} onClick={()=>handleClickProduct(item)}>
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