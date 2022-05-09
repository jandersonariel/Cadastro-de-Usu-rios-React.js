import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RouteComp } from './Routes'

import { Logo } from '../components/template/logo/Logo'
import { Nav } from '../components/template/nav/Nav'
import { Footer } from '../components/template/footer/Footer'


export const App = (props) => {
  return (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav/>
      <RouteComp />
      <Footer/>
    </div>
  </BrowserRouter>
  )
}