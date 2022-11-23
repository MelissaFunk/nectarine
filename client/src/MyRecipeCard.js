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
      body: JSON.stringify({
        has_made: true
      })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
  }

  const onFavorite = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        is_favorite: true
      })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
  }

  return(
    <div className="recipe-card">
      <a href={recipe.link} target="_blank" rel="noreferrer">
        <h2>{recipe.name}</h2></a>
      <p>{recipe.cuisine} | {recipe.cook_time}</p> 
      <img src={recipe.image} alt={recipe.name}/>
      <button onClick={() => onDeleteRecipe()}>Delete</button>
      {recipe.has_made === true ? null : <button onClick={() => onMade()}>Made</button>}
      {recipe.is_favorite === true ? null : <button onClick={() => onFavorite()}>Favorite</button>}
    </div>
  )
}

export default MyRecipeCard