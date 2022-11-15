import { Link } from "react-router-dom"

function NavBar() {
  return(
    <div>
      <Link to="/add-recipe">Add Recipe</Link>
      <Link to="/my-recipes">My Recipes</Link>
      <Link to="/my-groceries">Groceries</Link>
    </div>
  )
}

export default NavBar