import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

function MyRecipes({ currentUser }) {
  const [myRecipes, setMyRecipes] = useState([])
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    if (!!currentUser.id) {
    fetch(`/favorites/${currentUser.id}`)
      .then(res => res.json())
      .then(setMyRecipes)
      }
  }, [currentUser, myRecipes])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const recipeFilter = () => {
    return myRecipes.filter(recipe => {
      if (filter === "All") {
        return true
      } else {
        return recipe.category.includes(filter)
      }
    })
  }

  const handleDeleteRecipe = (recipeToDelete) => {
    setMyRecipes(myRecipes.filter(recipe => recipe.id !== recipeToDelete.id))
  }

  const eachRecipe = () => {
    return recipeFilter().map(recipe =>
      <RecipeCard
        recipe={recipe}
        key={recipe.id}
        handleDeleteRecipe={handleDeleteRecipe}
      />
    )}

  return(
    <div>
      <h1>My Recipes</h1>
      <label>Search by Category: </label>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Dessert">Dessert</option>
        <option value="Asian">Asian</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="American">American</option>
      </select>
      {eachRecipe()}
    </div>
  )
}

export default MyRecipes