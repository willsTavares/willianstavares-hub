import { Html, Head, Main, NextScript } from 'next/document'
import { DocumentProps } from 'next/document'

export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.locale || 'pt'}>
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#070d0c" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
