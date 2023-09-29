import { store } from "@/redux/store"
import { Provider } from "react-redux"
import Navbar from "../Navbar"
import Footer from "../Footer"
import NextTopLoader from "nextjs-toploader"

function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
      <NextTopLoader color="black" showSpinner={false} />
    </Provider>
  )
}

export default RootLayout
