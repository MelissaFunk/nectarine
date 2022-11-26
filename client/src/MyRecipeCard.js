function MyRecipeCard({ recipe, handleDeleteRecipe }) {

  const onDeleteRecipe = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then((recipe) => handleDeleteRecipe(recipe))
  }

  const onMade = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ has_made: true })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
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

  const onUnMake = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ has_made: false })
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
      <h3><a href={recipe.link} target="_blank" rel="noreferrer">{recipe.name}</a> {recipe.has_made === true ? "✅" : null} {recipe.is_favorite === true ? "⭐" : null}</h3>
      <p>{recipe.cuisine} | {recipe.cook_time}</p> 
      <img src={recipe.image} alt={recipe.name}/>
      <button className="recipe-card-btn" onClick={() => onDeleteRecipe()}>Delete</button>
      {recipe.has_made === true ? 
      <button className="recipe-card-btn" onClick={() => onUnMake()}>UnMake</button> : 
      <button className="recipe-card-btn" onClick={() => onMade()}>Made</button>}
      {recipe.is_favorite === true ? 
      <button className="unfav-btn" onClick={() => onUnFavorite()}>UnFavorite</button> : 
      <button className="recipe-card-btn" onClick={() => onFavorite()}>Favorite</button>}
    </div>
  )
}

export default MyRecipeCard