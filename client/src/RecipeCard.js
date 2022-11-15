function RecipeCard({ recipe, handleDeleteRecipe }) {

  const handleDeleteClick = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((recipe) => handleDeleteRecipe(recipe))
  }

  return(
    <div className="recipe-card">
      <a href={recipe.link} target="_blank" rel="noreferrer"><h3>{recipe.title}</h3></a>
      <img src={recipe.image} alt={recipe.title}/>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default RecipeCard