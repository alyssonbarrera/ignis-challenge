import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";

import { api } from "../services/api";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import {
    FilmsDiv,
    FilmsFooter,
    FilmsHeader,
    FilmsImage,
    FilmsMain,
    FilmsSection,
    FilmsSectionTitle,
    FilmsSpan,
    FilmsTitle
} from "../styles/Films.styles";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { parseCookies } from 'nookies'
import { ClipLoader } from "react-spinners";

import Head from "next/head";

interface ApiResponse {
    page: number
    results: [
        {
            adult: boolean
            backdrop_path: string
            genre_ids: number[]
            id: number
            original_language: string
            original_title: string
            overview: string
            popularity: number
            poster_path: string
            release_date: string
            title: string
            video: boolean
            vote_average: number
            vote_count: number
        }
    ]
    total_pages: number
    total_results: number   
}

interface FilmResults {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

interface FilmProps {
    filmsPagination: {
        next_page: number
        data: FilmResults[] 
    }
}

interface UserData {
    created_at: string
    email: string
    id: number
    name: string
    remember_me_token: string | null
    updated_at: string   
}

const Films: NextPage = ({ filmsPagination }: FilmProps) => {

    const [search, setSearch] = useState("")
    const [userName, setUserName] = useState("")
    const [loading, setLoading] = useState(false)
    const [films, setFilms] = useState(filmsPagination?.data)
    const [nextPage, setNextPage] = useState(filmsPagination?.next_page)

    useEffect(() => {
        const { name }: UserData = JSON.parse(localStorage.getItem("ignisflix.user"))
        setUserName(name)
    }, [])

    async function handleNextPage() {
        setLoading(true)
        const ignisflix_token = parseCookies()["ignisflix.token"]
        try {
            const { data: filmsNextPage } = await api.get(`/movies?page=${nextPage}`, {
                headers: {
                    Authorization: `Bearer ${ignisflix_token}`
                }
            })
            setNextPage(filmsNextPage.page + 1)
            setFilms([...films, ...filmsNextPage.results])
        } catch {
            alert("Erro ao carregar mais filmes")
        } finally {
            setLoading(false)
        }
    }

    async function handleSearch(data: { search: string }) {
        const ignisflix_token = parseCookies()["ignisflix.token"]
        const { data: filmsSearch } = await api.get(`/movies?query=${data.search}`, {
            headers: {
                Authorization: `Bearer ${ignisflix_token}`
            }
        })
        setFilms(filmsSearch.results)
    }

    useEffect(() => {
        if(search.length > 2) {
            handleSearch({ search })
        } else {
            setFilms(filmsPagination.data)
        }
    }, [search])

    return (
        <>
            <Head>
                <title>IgnisFlix | Films</title>
            </Head>
            <FilmsHeader>
                <FilmsDiv>
                    <FilmsImage onClick={() => history.back()} src="/Arrow.svg" alt="Seta apontando para a esquerda" />
                    <Logo position="center" />
                </FilmsDiv>
                <FilmsDiv>
                    <FilmsTitle>
                        Bem-vindo, <FilmsSpan>{ userName }</FilmsSpan>
                    </FilmsTitle>
                </FilmsDiv>
                <FilmsDiv>
                    <Input
                        name="search"
                        type="text"
                        variant="search"
                        placeholder="Buscar filme"
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </FilmsDiv>
            </FilmsHeader>

            <FilmsMain>
                <FilmsSectionTitle>
                    Filmes
                </FilmsSectionTitle>
                <FilmsSection>
                    {
                        films?.map(film => (
                            <Card
                                key={film.id}
                                id={film.id}
                                title={film.title}
                                overview={film.overview}
                                poster_path={film.poster_path}
                                vote_average={film.vote_average}
                            />
                        ))
                    }
                </FilmsSection>
            </FilmsMain>
            <FilmsFooter>
                {
                    films.length > 19 && (
                        <Button
                            type="button"
                            loading={loading}
                            onClick={handleNextPage}
                        >
                                                {
                       loading ?
                        (
                            <ClipLoader
                                color="#F52D2D"
                                size={20}
                            />
                        )
                        : "Ver mais"
                    }
                        </Button>
                    )
                }
            </FilmsFooter>
        </>
    )
}

export default Films;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { ['ignisflix.token']: token } = req.cookies

    if(!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    const { data } = await api.get<ApiResponse>('/movies', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const next_page = data.page + 1
    
    return {
        props: {
            filmsPagination: {
                next_page,
                data: data.results
            }
        }
    }
}