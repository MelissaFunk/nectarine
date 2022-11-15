import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import CalendarCard from './CalendarCard'

function MyRecipes({ currentUser }) {
  const [myRecipes, setMyRecipes] = useState([])
  const [filter, setFilter] = useState("All")
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
    if (!!currentUser.id) {
    fetch(`/favorites/${currentUser.id}`)
      .then(res => res.json())
      .then(recipes => {
        setMyRecipes(recipes)
        setSun1(recipes.filter(recipe => recipe.date === "Sun1").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setMon1(recipes.filter(recipe => recipe.date === "Mon1").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setTues1(recipes.filter(recipe => recipe.date === "Tues1").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setWed1(recipes.filter(recipe => recipe.date === "Wed1").map(recipe => 
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setThurs1(recipes.filter(recipe => recipe.date === "Thurs1").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setFri1(recipes.filter(recipe => recipe.date === "Fri1").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setSat1(recipes.filter(recipe => recipe.date === "Sat1").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setSun2(recipes.filter(recipe => recipe.date === "Sun2").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setMon2(recipes.filter(recipe => recipe.date === "Mon2").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setTues2(recipes.filter(recipe => recipe.date === "Tues2").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setWed2(recipes.filter(recipe => recipe.date === "Wed2").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setThurs2(recipes.filter(recipe => recipe.date === "Thurs2").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setFri2(recipes.filter(recipe => recipe.date === "Fri2").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
        setSat2(recipes.filter(recipe => recipe.date === "Sat2").map(recipe =>
          <CalendarCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
        ))
      })
      }
  }, [currentUser, myRecipes])

  const curr = new Date()
  const first = curr.getDate() - curr.getDay()
  const currentweek = new Date(curr.setDate(first)).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})

  const next = curr.getDate() - curr.getDay() + 7
  const nextweek = new Date(curr.setDate(next)).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const recipeFilter = () => {
    return myRecipes.filter(recipe => {
      if (filter === "All") {
        return true
      } else {
        return recipe.category.includes(filter)
      }
    })
  }

  const handleDeleteRecipe = (recipeToDelete) => {
    setMyRecipes(myRecipes.filter(recipe => recipe.id !== recipeToDelete.id))
  }

  const eachRecipe = () => {
    return recipeFilter().filter(rec => rec.date === null).map(recipe =>
      <RecipeCard
        recipe={recipe}
        key={recipe.id}
        handleDeleteRecipe={handleDeleteRecipe}
      />
    )}

  return(
    <div>
      <div>
      <h1>My Recipes</h1>
      <label>Search by Category: </label>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Dessert">Dessert</option>
        <option value="Asian">Asian</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="American">American</option>
      </select>
      {eachRecipe()}
      </div>

      <div className="calendar-div">
      <h1>Calendar</h1>
      <h2>Week of {currentweek}</h2>
      <table>
        <tbody>
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
          <td>{sun1}</td>
          <td>{mon1}</td>
          <td>{tues1}</td>
          <td>{wed1}</td>
          <td>{thurs1}</td>
          <td>{fri1}</td>
          <td>{sat1}</td>
        </tr>
        </tbody>
      </table>

      <h2>Week of {nextweek}</h2>
      <table>
        <tbody>
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
          <td>{sun2}</td>
          <td>{mon2}</td>
          <td>{tues2}</td>
          <td>{wed2}</td>
          <td>{thurs2}</td>
          <td>{fri2}</td>
          <td>{sat2}</td>
        </tr>
        </tbody>
      </table>    
      </div>
  </div>
  )
}

export default MyRecipes