import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import ProductDetailPage from './pages/product/product-detail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>

        <Route path="/product-detail/:id" element={<ProductDetailPage />}>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
