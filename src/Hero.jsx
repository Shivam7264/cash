import React from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Rays from './rays.jsx'
export default function Hero(){
    return(
        <div className="hero">
        <Header/>
        <Rays/>
       <Footer/>
            
    </div>
    )
}