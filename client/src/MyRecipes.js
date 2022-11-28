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
  const [newRec, setNewRec] = useState(false)

  useEffect(() => {
    fetch(`/recipes`)
      .then(res => res.json())
      .then(recipes => 
        setMyRecipes(recipes.sort((a, b) => (a.name > b.name) ? 1 : -1)))
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

  const handleNewFilter = handleCuisineFilter.filter(recipe => {
    if (newRec === false) {
      return true
    } else {
      return recipe.date === null && recipe.has_made === false
    }
  })

  const handleMadeFilter = handleNewFilter.filter(recipe => {
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
    setNewRec(false)
  }

  const showNewRec = () => {
    setHasMade(false)
    setFavorite(false)
    setNewRec(true)
  }

  const showMade = () => {
    setHasMade(true)
    setFavorite(false)
    setNewRec(false)
  }

  const showFavorite = () => {
    setHasMade(false)
    setFavorite(true)
    setNewRec(false)
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
        <button className="my-recipes-btn" onClick={() => setButtonPopUp(true)}>Add Recipe</button>
        <AddRecipe trigger={buttonPopUp} setTrigger={setButtonPopUp} currentUser={currentUser}/>
        <label>Search By Cuisine: </label>
        <input type="text" onChange={e => setCuisineFilter(e.target.value)}></input>
        <button className="my-recipes-btn" onClick={() => showAll()}>All 🍑</button>
        <button className="my-recipes-btn" onClick={() => showNewRec()}>New ⭐</button>
        <button className="my-recipes-btn" onClick={() => showMade()}>Made ✅</button>
        <button className="my-recipes-btn" onClick={() => showFavorite()}>Favorites ❤️</button>
        <div className="recipe-container">
          {recipesToDisplay} 
        </div>
      </div>
      : 
      <h2><Link to="/login" className="login-link">Login</Link> to Create Recipes</h2>
      }
    </div>
  )
}

export default MyRecipes