import React from 'react'
import ReactDOM from 'react-dom/client'

import DefaultLayout from './layouts/default.tsx'
import Index from './pages/index.tsx'
import About from './pages/about.tsx'

import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="index" index element={<Index />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
