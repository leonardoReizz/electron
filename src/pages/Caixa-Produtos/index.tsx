import { useEffect } from "react"
import { Link } from "react-router-dom"

export function Home(){
    useEffect(()=>{
        document.title = "O Titulo da Pagina"
    },[])
    return (
    <>
        
        <div>
            
        </div>
    </>
    )
}