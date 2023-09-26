import { store } from "@/redux/store"
import { Provider } from "react-redux"
import Navbar from "../Navbar"
import Footer from "../Footer"

function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
    </Provider>
  )
}

export default RootLayout
