import { Link } from "react-router-dom"
import { useHistory } from "react-router"

function NavBar({ setCurrentUser }) {
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
    <div>
      <Link to="/my-recipes">My Recipes</Link>
      <Link to="/my-groceries">Groceries</Link>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  )
}

export default NavBar