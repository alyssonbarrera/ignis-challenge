import 'antd/dist/antd.css';
import '../styles/globals.css'
import "../styles/nprogress.css"
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import { useRouter } from 'next/router'

import NProgress from 'nprogress'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const router = useRouter()

  router?.events?.on('routeChangeStart', () => {
    NProgress.start()
  })
  router?.events?.on('routeChangeComplete', () => {
    NProgress.done()
  })

  return ( 
    <>
      {
        loading ? (
          <div className="loading" style={
            {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: '100%'
            }
          }>
            <ScaleLoader color="#FF0000" />
          </div>
        ) : (
          <Component {...pageProps} />
        )
      }
    </>
  )

}

export default MyApp
