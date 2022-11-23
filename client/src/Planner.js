import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CalendarCard from './CalendarCard'

function Planner({ currentUser }) {
  const curr = new Date()
  const first = curr.getDate() - curr.getDay()
  const next = first + 7
  const firstWeek = new Date(curr.setDate(first)).toDateString()
  const nextWeek = new Date(curr.setDate(next)).toDateString()

  const [recipes, setRecipes] = useState([])
  const [sun1, setSun1] = useState([])
  const [mon1, setMon1] = useState([])
  const [tues1, setTues1] = useState([])
  const [wed1, setWed1] = useState([])
  const [thurs1, setThurs1] = useState([])
  const [fri1, setFri1] = useState([])
  const [sat1, setSat1] = useState([])
  const [sun2, setSun2] = useState([])
  const [mon2, setMon2] = useState([])
  const [tues2, setTues2] = useState([])
  const [wed2, setWed2] = useState([])
  const [thurs2, setThurs2] = useState([])
  const [fri2, setFri2] = useState([])
  const [sat2, setSat2] = useState([])

  useEffect(() => {
    fetch(`/recipes`)
      .then(res => res.json())
      .then(recipes => {
        setRecipes(recipes.filter(recipe => {
          if (recipe.user_id === currentUser.id) {
            return true
          } else {
            return null
          }
        }))
        setSun1(recipes.filter(recipe => recipe.date === "Sun1"))
        setMon1(recipes.filter(recipe => recipe.date === "Mon1"))
        setTues1(recipes.filter(recipe => recipe.date === "Tues1"))
        setWed1(recipes.filter(recipe => recipe.date === "Wed1"))
        setThurs1(recipes.filter(recipe => recipe.date === "Thurs1"))
        setFri1(recipes.filter(recipe => recipe.date === "Fri1"))
        setSat1(recipes.filter(recipe => recipe.date === "Sat1"))
        setSun2(recipes.filter(recipe => recipe.date === "Sun2"))
        setMon2(recipes.filter(recipe => recipe.date === "Mon2"))
        setTues2(recipes.filter(recipe => recipe.date === "Tues2"))
        setWed2(recipes.filter(recipe => recipe.date === "Wed2"))
        setThurs2(recipes.filter(recipe => recipe.date === "Thurs2"))
        setFri2(recipes.filter(recipe => recipe.date === "Fri2"))
        setSat2(recipes.filter(recipe => recipe.date === "Sat2"))
      })
  }, [recipes, currentUser.id])

  const handleDeleteRecipe = (recipeToDelete) => {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeToDelete.id))
  }

  return(
    <div>
      <h1>Planner</h1>
      {currentUser.username ?
      <div>
      <h2>Week of {firstWeek}</h2>
      <table>
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sun1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{mon1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{tues1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{wed1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{thurs1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{fri1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{sat1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
          </tr>
        </tbody>
      </table>

      <h2>Week of {nextWeek}</h2>
      <table>
        <tr>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
        <tr>
            <td>{sun2.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{mon2.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{tues2.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{wed2.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{thurs2.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{fri2.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
            <td>{sat2.map(recipe => <CalendarCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>)}</td>
          </tr>
      </table>
      </div>
      :
      <h2><Link to="/login">Login</Link> to View Planner</h2>}
    </div>
  )
}

export default Planner