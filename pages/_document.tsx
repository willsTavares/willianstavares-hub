import { Html, Head, Main, NextScript } from 'next/document'
import { DocumentProps } from 'next/document'

export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.locale || 'pt'}>
      <Head>
        <meta name="robots" content="follow, index" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
