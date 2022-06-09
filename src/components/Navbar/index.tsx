import styles from "./styles.module.sass"
import alertSVG from "./alert.svg"


export function Navbar(){
    return (
        <>
           <ul className={styles.lista}>
               <li>Assad</li>
               <li>ASDASD </li>
               <li>ASDASD</li>
               <li>ASDsdasd</li>
               <img src={alertSVG} alt="alert"/>
            </ul> 
        </>
    )
}
