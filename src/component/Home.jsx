import'../App.css'
import React from 'react'
import Products from './Products'

export default function Home() {
  return (
    <div className='homepage'>
        <div className="card text-bg-dark border-0">
  <img src="/images/bgg.jpg" className="card-img" alt="Background Image"/>
  <div className="card-img-overlay container">
    <span className="card-title black display-6 fw-bolder">WELCOME to JEWEL</span> 
    <span className="lead fs-3 black">Shine with Elegance</span>
  </div>
</div>
<Products/>
    </div>
  )
}
