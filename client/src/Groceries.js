import { useState, useEffect } from 'react'

function Groceries({ currentUser }) {
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(users => setIngredients(users.filter(user => user.id === currentUser.id)[0].groceries))
  }, [currentUser.id])

  const ingredients1 = ingredients.slice(0, 10).map(ing =>
    <li key={ing}>{ing}</li>  
  )

  const ingredients2 = ingredients.slice(10, 20).map(ing =>
    <li key={ing}>{ing}</li>  
  )

  const ingredients3 = ingredients.slice(20, 30).map(ing =>
    <li key={ing}>{ing}</li>  
  )

  const ingredients4 = ingredients.slice(30, 40).map(ing =>
    <li key={ing}>{ing}</li>  
  )

  const ingredients5 = ingredients.slice(40, 50).map(ing =>
    <li key={ing}>{ing}</li>  
  )

  return(
    <div>
      <h1>Groceries</h1>
      {ingredients1}
      <br></br>
      {ingredients2}
      <br></br>
      {ingredients3}
      <br></br>
      {ingredients4}
      <br></br>
      {ingredients5}
    </div>
  )
}

export default Groceries