import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <nav>
            <span>Minicoffee</span>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/catalog">Catálogo</Link>
                </li>
                <li>
                    <Link to="/contact">Contato</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar