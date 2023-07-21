import'../App.css'
import React from 'react'
import Products from './Products'

export default function Home() {
  return (
    <div className='homepage'>
        <div className="card text-bg-dark border-0">
  <img src="/images/bgg.jpg" className="card-img" alt="Background Image"/>
  <div className="card-img-overlay container">
    <h5 className="card-title black display-6 fw-bolder">WELCOME to JEWEL</h5>
    <p className="card-text lead fs-3 black">Shine with Elegance</p>
  </div>
</div>
<Products/>
    </div>
  )
}
