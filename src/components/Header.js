import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Book Mark App</div>
      </Link>
    </nav>
  )
}

export default Header
