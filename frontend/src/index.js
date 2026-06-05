import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './landing pages/home/HomePage';
import AboutPage from './landing pages/about/AboutPage';
import ProductPage from './landing pages/products/ProductPage';
import PricingPage from './landing pages/pricing/pricingPage';
import SupportPage from './landing pages/support/SupportPage';
import SignupPage from './landing pages/sign up/signupPage';

import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Notfound from './landing pages/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={<SignupPage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/products' element={<ProductPage/>}></Route>
    <Route path='/pricing' element={<PricingPage/>}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
    <Route path='*' element={<Notfound/>}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
