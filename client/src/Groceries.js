import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      {currentUser.username ?
      <div>
      <a href="https://www.instacart.com/store" target="_blank" rel="noreferrer">Instacart</a>
      {ingredients1}
      {ingredients2}
      {ingredients3}
      {ingredients4}
      {ingredients5}
      </div>
      :
      <h2><Link to="/login">Login</Link> to View Groceries</h2>}
    </div>
  )
}

export default Groceries