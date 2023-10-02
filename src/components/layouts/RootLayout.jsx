import Navbar from "../Navbar"
import Footer from "../Footer"
import NextTopLoader from "nextjs-toploader"

function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <NextTopLoader color="black" showSpinner={false} />
    </>
  )
}

export default RootLayout
