import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import AddRecipe from './AddRecipe'

function MyRecipes({ currentUser }) {
  const [myRecipes, setMyRecipes] = useState([])
  const [buttonPopUp, setButtonPopUp] = useState(false)

  useEffect(() => {
    fetch(`/recipes`)
      .then(res => res.json())
      .then(setMyRecipes)
  }, [])

  const onlyMyRecipes = myRecipes.filter(recipe => {
    if (recipe.user_id === currentUser.id) {
      return true
    } else {
      return null
    }
  })

  const recipesToDisplay = onlyMyRecipes.map(recipe =>
    <RecipeCard key={recipe.id} recipe={recipe}/>
  )

  return(
    <div>
      <h1>My Recipes</h1>
      {currentUser.username ? 
      <div>
        <button onClick={() => setButtonPopUp(true)}>Add Recipe</button>
        <AddRecipe trigger={buttonPopUp} setTrigger={setButtonPopUp}/>
        {recipesToDisplay} 
      </div>
      : 
      <h2><Link to="/login">Login</Link> to Create Recipes</h2>
      }
    </div>
  )
}

export default MyRecipes