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
    <div className="navbar">
      <img src="https://i.imgur.com/IUpishQ.png" />
      <Link to="/my-recipes"><h3>RECIPES</h3></Link>
      <Link to="/my-groceries"><h3>GROCERIES</h3></Link>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  )
}

export default NavBar