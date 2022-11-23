function RecipeCard({ recipe }) {
  return(
    <div>
      <a href={recipe.link} target="_blank" rel="noreferrer">
        <h2>{recipe.name}</h2></a>
      <p>{recipe.cuisine} | {recipe.cook_time}</p> 
      <img src={recipe.image} alt={recipe.name}/>
    </div>
  )
}

export default RecipeCard