import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom"

const DefaultLayout: any = (props: any) => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout