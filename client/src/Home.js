import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

function Home() {
  const [random5, setRandom5] = useState([])

  useEffect(() => {
    fetch('/recipes')
    .then(res => res.json())
    .then(recipes => {
      let shuffled = recipes
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        setRandom5(shuffled)
    })
  }, [])

  const recipesToDisplay = random5.slice(0, 6).map(recipe =>
    <RecipeCard key={recipe.id} recipe={recipe}/>
  )

  return(
    <div className="home-div">
      <h1>Check Out These Recipes:</h1>
      <div className="recipe-cards">{recipesToDisplay}</div>
    </div>
  )
}

export default Home