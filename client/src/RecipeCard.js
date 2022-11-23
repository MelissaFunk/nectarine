function RecipeCard({ recipe }) {
  return(
    <div className="recipe-card-div">
      <a href={recipe.link} target="_blank" rel="noreferrer">
        <h3>{recipe.name}</h3></a>
      <p>{recipe.cuisine} | {recipe.cook_time}</p> 
      <img src={recipe.image} alt={recipe.name}/>
    </div>
  )
}

export default RecipeCard