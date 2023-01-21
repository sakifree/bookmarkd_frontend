import { Link } from "react-router-dom"

function Header(props) {
  return (
    <div className="container">
    <nav className="nav">
      <Link to="/">
        <div>Book Mark App</div>
      </Link>
    </nav>
    <br></br>
    </div>
    
  )
}

export default Header
