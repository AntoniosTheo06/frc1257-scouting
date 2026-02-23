import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Source_Sans_3 } from "next/font/google"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: "400",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={sourceSans.className}>
      <Component {...pageProps} />
    </div>
  )
}