import { Link, NavLink } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <header>
              <nav>
                  <NavLink to="/">Cartas</NavLink>
                  <NavLink to="/card:id">Carta_Id</NavLink>
              </nav>
      </header>
    </div>
  )
}
