import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Housing from "./pages/Housing"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logement" element={<Housing />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}