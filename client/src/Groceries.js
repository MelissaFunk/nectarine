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
    <div className="groceries-div">
      <h1>Groceries</h1>
      <a className="insta-link" href="https://www.instacart.com/store" target="_blank" rel="noreferrer">Instacart</a>
      {currentUser.username ?
      <div className="all-lists">
        <div className="list-div">{ingredients1}</div>
        <div className="list-div">{ingredients2}</div>
        <div className="list-div">{ingredients3}</div>
        <div className="list-div">{ingredients4}</div>
        <div className="list-div">{ingredients5}</div>
      </div>
      :
      <h2><Link to="/login" className="login-link">Login</Link> to View Groceries</h2>}
    </div>
  )
}

export default Groceries