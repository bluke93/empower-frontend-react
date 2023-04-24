import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

import "../assets/scss/layouts/Base.scss"

function Base(){
  return (
    <>
      <div className="base-layout">
        <Sidebar />
        <main className="page-container">
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default Base