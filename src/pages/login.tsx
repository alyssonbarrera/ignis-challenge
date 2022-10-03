import { useState } from "react";
import { NextPage } from "next";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { LoginFooter, LoginForm, LoginHeader, LoginImage, LoginMain } from "../styles/Login.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../services/api";
import { setCookie } from 'nookies';
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import * as yup from "yup";
import Head from "next/head";

interface LoginData {
    email_or_username: string
    password: string
}

interface ApiResponse {
    accessToken: {
        expires_in: string
        token: string
        type: string
    }
    user: {
        created_at: string
        email: string
        id: number
        name: string
        remember_me_token: string | null
        updated_at: string
    }
}

interface ApiData {
    data: ApiResponse
}

const loginSchema = yup.object().shape({
    email_or_username: yup.string().required("E-mail ou username obrigatório"),
    password: yup.string().required("Senha obrigatória"),
})

const Login: NextPage = () => {

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState } = useForm({resolver: yupResolver(loginSchema)})
    const { errors } = formState

    const router = useRouter()

    async function login({ email_or_username, password }: LoginData) {
        setLoading(true)
        try {
            const { data }: ApiData = await api.post("/login", {
                email: email_or_username,
                password: password
            })

            localStorage.setItem("ignisflix.user", JSON.stringify(data.user))
            
            setCookie(undefined, 'ignisflix.token', data.accessToken.token, {
                maxAge: 60 * 60 * 24 * 10, // 10 days
                path: '/'
            })

            router.push("/films")

        } catch (error) {
            if(error?.response?.status === 400) {
                alert("Usuário ou senha inválidos")
            } else {
                alert("Erro ao realizar login")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Head>
                <title>IgnisFlix | Login</title>
            </Head>
            <LoginHeader>
                <LoginImage onClick={() => history.back()} src="/Arrow.svg" alt="Seta apontando para a esquerda" />
                <Logo position="center" />
            </LoginHeader>

            <LoginMain>
                <LoginForm>
                    <Input
                        name="email_or_username"
                        type="text"
                        label="E-mail / username"
                        error={errors.email_or_username as any}
                        {...register("email_or_username")}
                    />
                    <Input
                        name="password"
                        type="password"
                        label="Senha"
                        variant="password"
                        error={errors.password as  any}
                        {...register("password")}
                    />
                </LoginForm>
            </LoginMain>

            <LoginFooter error={errors.password != undefined}>
                <Button
                    type="submit"
                    loading={loading}
                    onClick={handleSubmit(login)}
                >
                    {
                        loading 
                        ? (
                            <ClipLoader
                                color="#F52D2D"
                                size={20}
                            />
                        )
                        : "Entrar"
                    }
                </Button>
            </LoginFooter>
        </>
    );
}

export default Login;