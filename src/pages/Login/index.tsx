import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup"
import Axios from "axios"; 

import styles from "./styles.module.sass"

// eslint-disable-next-line no-unused-vars
type Login = {
    username: string,
    password: string,
}

// eslint-disable-next-line no-redeclare
export function Login(){
    

    useEffect(()=>{
        document.title = "TITUTLO DA PAGINA"
    },[])


    const navigate = useNavigate();
     
    
    
    const schema = yup.object({
        username: yup.string().required( "Campo Obrigatorio" ).max( 24, "Maximo 24 Caracteres" ),
        password: yup.string().required( "Campo Obrigatorio" ).max( 12, "Maximo 12 Caracteres" )
    });
    const{ register , handleSubmit, formState: { errors } } = useForm<Login>({
        resolver: yupResolver( schema )
    });

    const onSubmit: SubmitHandler<Login> = data => {
        Axios.post("http://localhost:3333/sellers/login  ", {
            username: data.username,
            pass: data.password
        })
        .then(( res ) => {
            localStorage.setItem( 'user', JSON.stringify( res.data.result.data ) );
            sessionStorage.setItem( 'token', JSON.stringify( res.data.result.token ) );
            navigate('/home');
        })
        .catch(( err ) => {
            console.log( err );    
        })
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.limit}>
                        <h1>SoftSystem</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input 
                            type="text" 
                            placeholder="Usuario"
                            {...register("username")}
                            />
                            <p>{errors.username?.message}</p>
                            <input 
                            type="password" 
                            placeholder="Senha"
                            {...register("password")}
                            />
                            <p>{errors.password?.message}</p>
                            <button>Login</button>
                            <Link to="/home">Acessar Home</Link>
                        </form>  
                    </div>
                </div>
            </div>
        </>
    )
}