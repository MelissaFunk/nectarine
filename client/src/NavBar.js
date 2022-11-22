import { Link } from 'react-router-dom'
import { useHistory } from "react-router"

function NavBar({ currentUser, setCurrentUser }) {
  const history = useHistory()

  const handleLogout = () => {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
            setCurrentUser({})
            history.push("/")
        }
    })
  }  

  return(
    <div className="navbar">
      <Link to="/"><img src="https://i.imgur.com/8Qyb3is.jpg" alt="nav-icon"/></Link>
      <h1>Nectarine</h1>

      <Link to="/my-recipes"><h3 className="link1">My Recipes</h3></Link>
      <Link to="/planner"><h3 className="link2">Planner</h3></Link>
      <Link to="/groceries"><h3 className="link3">Groceries</h3></Link>

      {currentUser.username ? <button className="signup-login-div" onClick={() => handleLogout()}>Logout</button> :
      <div className="signup-login-div">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>}
    </div>
  )
}

export default NavBar