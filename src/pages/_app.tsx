import "../styles/globals.css"
import "tailwindcss/tailwind.css"

import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1TN9K1TRXW"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-1TN9K1TRXW');`}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
