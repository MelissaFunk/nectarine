import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MyRecipeCard from './MyRecipeCard'
import AddRecipe from './AddRecipe'

function MyRecipes({ currentUser }) {
  const [myRecipes, setMyRecipes] = useState([])
  const [buttonPopUp, setButtonPopUp] = useState(false)
  const [cuisineFilter, setCuisineFilter] = useState("")
  const [hasMade, setHasMade] = useState(false)
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    fetch(`/recipes`)
      .then(res => res.json())
      .then(setMyRecipes)
  }, [myRecipes])

  const onlyMyRecipes = myRecipes.filter(recipe => {
    if (recipe.user_id === currentUser.id) {
      return true
    } else {
      return null
    }
  })

  const handleCuisineFilter = onlyMyRecipes.filter(recipe => {
      if (cuisineFilter === "") {
        return true
      } else {
        return recipe.cuisine.toLowerCase().includes(cuisineFilter.toLowerCase())
      }
    }) 

  const handleMadeFilter = handleCuisineFilter.filter(recipe => {
    if (hasMade === false) {
      return true
    } else {
      return recipe.has_made === true
    }
  })

  const handleFavoriteFilter = handleMadeFilter.filter(recipe => {
    if (favorite === false) {
      return true
    } else {
      return recipe.is_favorite === true
    }
  })

  const showAll = () => {
    setHasMade(false)
    setFavorite(false)
  }

  const showMade = () => {
    setHasMade(true)
    setFavorite(false)
  }

  const showFavorite = () => {
    setHasMade(false)
    setFavorite(true)
  }

  const handleDeleteRecipe = (recipeToDelete) => {
    setMyRecipes(handleFavoriteFilter.filter(recipe => recipe.id !== recipeToDelete.id))
  }

  const recipesToDisplay = handleFavoriteFilter.map(recipe =>
    <MyRecipeCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe} />
  )

  return(
    <div className="my-recipes-div">
      <h1>My Recipes</h1>
      {currentUser.username ? 
      <div>
        <button onClick={() => setButtonPopUp(true)}>Add Recipe</button>
        <AddRecipe trigger={buttonPopUp} setTrigger={setButtonPopUp} currentUser={currentUser}/>
        <label>Search By Cuisine: </label>
        <input type="text" onChange={e => setCuisineFilter(e.target.value)}></input>
        <button onClick={() => showAll()}>All 🍑</button>
        <button onClick={() => showMade()}>Made ✅</button>
        <button onClick={() => showFavorite()}>Favorites ⭐</button>
        <div className="recipe-container">
          {recipesToDisplay} 
        </div>
      </div>
      : 
      <h2><Link to="/login">Login</Link> to Create Recipes</h2>
      }
    </div>
  )
}

export default MyRecipes