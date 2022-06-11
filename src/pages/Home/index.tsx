import { useEffect } from "react"

export function Home(){
    useEffect(()=>{
        document.title = "O Titulo da Pagina"
    },[])
    return (
    <>
    </>
    )
}