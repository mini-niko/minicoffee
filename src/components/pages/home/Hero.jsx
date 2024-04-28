import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
        <h1>O melhor café da sua vida</h1>
        <h2>Quer experimentar? É só clicar no botão abaixo</h2>
        <Link to="/catalog">Catálogo</Link>
    </div>
  )
}

export default Hero