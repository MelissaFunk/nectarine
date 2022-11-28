import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CalendarCard from './CalendarCard'

function Planner({ currentUser }) {
  const curr = new Date()
  const first = curr.getDate() - curr.getDay()
  const firstWeek = new Date(curr.setDate(first)).toDateString()

  const [recipes, setRecipes] = useState([])
  const [sun1, setSun1] = useState([])
  const [mon1, setMon1] = useState([])
  const [tues1, setTues1] = useState([])
  const [wed1, setWed1] = useState([])
  const [thurs1, setThurs1] = useState([])
  const [fri1, setFri1] = useState([])
  const [sat1, setSat1] = useState([])

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
        setSun1(recipes.filter(recipe => recipe.date === "Sun"))
        setMon1(recipes.filter(recipe => recipe.date === "Mon"))
        setTues1(recipes.filter(recipe => recipe.date === "Tues"))
        setWed1(recipes.filter(recipe => recipe.date === "Wed"))
        setThurs1(recipes.filter(recipe => recipe.date === "Thurs"))
        setFri1(recipes.filter(recipe => recipe.date === "Fri"))
        setSat1(recipes.filter(recipe => recipe.date === "Sat"))
      })
  }, [recipes, currentUser.id])

  return(
    <div className="planner-div">
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
            <td>{sun1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id}/>)}</td>
            <td>{mon1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id}/>)}</td>
            <td>{tues1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id}/>)}</td>
            <td>{wed1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id}/>)}</td>
            <td>{thurs1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id}/>)}</td>
            <td>{fri1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id}/>)}</td>
            <td>{sat1.map(recipe => <CalendarCard recipe={recipe} key={recipe.id}/>)}</td>
          </tr>
        </tbody>
      </table>
      <div className="bottom-div"></div>
      </div>
      :
      <h2><Link to="/login" className="login-link">Login</Link> to View Planner</h2>}
    </div>
  )
}

export default Planner