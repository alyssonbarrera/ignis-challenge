import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="og:image" property="og:image" content="/Logo.png" />
                    <meta name="description" content="A revolução do cinema na sua casa." />
                    <meta name="keywords" content="IgnisFlix, filmes, cinema, assistir filmes, assistir cinema" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>   
        )
    }
}