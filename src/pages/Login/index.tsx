import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from "yup"

import styles from "./styles.module.sass"
import { Message } from 'discord.js'
import { Link } from 'react-router-dom'

type Login = {
    user: string,
    password: string
}

export function Login(){
    useEffect(()=>{
        document.title = "System - Entrar"
    },[])
    
    const schema = yup.object({
        user: yup.string().required("Campo Obrigatorio").max(24, "Maximo 24 Caracteres"),
        password: yup.string().required("Campo Obrigatorio").max(24,"Maximo 24 Caracteres")
    })
    const{ register , handleSubmit, formState: {errors}} = useForm<Login>({
        resolver: yupResolver(schema)
    });


    const onSubmit: SubmitHandler<Login> = data => {

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
                            {...register("user")}
                            />
                            <p>{errors.user?.message}</p>
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