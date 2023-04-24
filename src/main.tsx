import React from 'react'
import ReactDOM from 'react-dom/client'

import Base from './layouts/Base.tsx'
import Index from './pages/index.tsx'
import About from './pages/about.tsx'

import './assets/scss/main.scss'

import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Base />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
