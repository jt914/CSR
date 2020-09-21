import "../stylesheets/tailwind.css"
import "@brainhubeu/react-carousel/lib/style.css"
import React from "react"
import type { AppProps } from "next/app"

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
