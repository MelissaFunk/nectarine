import { useState } from 'react'
import AddDate from './AddDate'

function MyRecipeCard({ recipe, handleDeleteRecipe }) {
  const [buttonPopUp, setButtonPopUp] = useState(false)

  const onDeleteRecipe = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then((recipe) => handleDeleteRecipe(recipe))
  }

  const onFavorite = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_favorite: true })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
  }

  const onUnFavorite = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_favorite: false })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
  }
   
  return(
    <div className="recipe-card">
      <h3><a href={recipe.link} target="_blank" rel="noreferrer">{recipe.name}</a> {recipe.has_made === true ? "✅" : null} {recipe.is_favorite === true ? "❤️" : null}</h3>
      <p>{recipe.cuisine} | {recipe.cook_time}</p> 
      <img src={recipe.image} alt={recipe.name}/>
      {recipe.date === null ? <button className="recipe-card-btn" onClick={() => setButtonPopUp(true)}>Add Date</button> : null}
      <AddDate trigger={buttonPopUp} setTrigger={setButtonPopUp} recipe={recipe}/>

      {recipe.is_favorite === true ? 
      <button className="recipe-card-btn" onClick={() => onUnFavorite()}>UnFavorite</button> : 
      <button className="recipe-card-btn" onClick={() => onFavorite()}>Favorite</button>}
       <button className="recipe-card-btn" onClick={() => onDeleteRecipe()}>Delete</button>
    </div>
  )
}

export default MyRecipeCard