import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductList from '../pages/ProductList'

function App()  {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<ProductList/>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App