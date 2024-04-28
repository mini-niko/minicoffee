import React from 'react'
import { Link } from 'react-router-dom'

function errorPage() {
  return (
    <div>
        <h2>Ops! Erro 404</h2>
        <Link to="/">Voltar para a página principal</Link>
    </div>
  )
}

export default errorPage