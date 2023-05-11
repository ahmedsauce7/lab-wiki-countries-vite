import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
  <div className="container">
  <Link to={'/'} className="navbar-brand">WikiCountries</Link>
      </div>
      </nav>
      </div>
)
}

export default Navbar;