import "@/styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import RootLayout from "@/components/layouts/RootLayout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </RootLayout>
  )
}
