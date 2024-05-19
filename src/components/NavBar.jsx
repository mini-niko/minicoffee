import { Link } from 'react-router-dom'
import "./NavBar.module.css"

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
            </ul>
        </nav>
    </>
  )
}

export default NavBar