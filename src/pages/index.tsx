import type { NextPage } from 'next'

import {
  HomeFooter,
  HomeHeader,
  HomeImageContainer,
  HomeMain,
  HomeParagraph,
  HomePearsonImage,
  HomeText,
  HomeTitle
} from '../styles/Home.styles'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { parseCookies } from 'nookies'

import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {

  const ignisflix_token = parseCookies()["ignisflix.token"]

  return (
    <>
      <Head>
        <title>IgnisFlix | Home</title>
      </Head>
      <HomeHeader>
        <Logo />
      </HomeHeader>

      <HomeMain>
        <HomeText>
          <HomeTitle>
            Do sofá pro seu celular
          </HomeTitle>
          <HomeParagraph>
            A revolução do cinema na sua casa.
          </HomeParagraph>
        </HomeText>  
        <HomeImageContainer>
          <HomePearsonImage src="/Pearson.png" alt="Homem negro sorrindo para a câmera. Ele tem um relógio no braço e está usando uma camisa vermelha com uma camiseta branca por baixo." />
        </HomeImageContainer>
      </HomeMain>

      <HomeFooter>
        <Button
          type="button"
        >
          <Link href={
            ignisflix_token ? (
              '/films'
            ) : (
              '/login'
            )
          }>
            Começar a ver filmes
          </Link>
        </Button>
      </HomeFooter>
    </>
  )
}

export default Home
