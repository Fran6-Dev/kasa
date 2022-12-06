import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Housing from "./pages/Housing"
import Error from "./pages/Error";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>


    </>
  )
} 