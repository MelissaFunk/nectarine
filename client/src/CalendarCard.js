import { useState } from 'react'

function CalendarCard({ recipe, handleDeleteRecipe }) {
  const [week, setWeek] = useState('')
  const [day, setDay] = useState('')

  const onDeleteRecipe = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(recipe => handleDeleteRecipe(recipe))
  }

  const onChangeDate = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: `${day}${week}`
      })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
  }

  return(
    <div className="recipe-card">
      <a href={recipe.link} target="_blank" rel="noreferrer">
        <h2>{recipe.name}</h2></a>
      <img src={recipe.image} alt={recipe.name}/>
        <label>Week: </label>
        <select onChange={e => setWeek(e.target.value)}>
          <option></option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <label>Day: </label>
        <select onChange={e => setDay(e.target.value)}>
          <option></option>
          <option value="Sun">Sunday</option>
          <option value="Mon">Monday</option>
          <option value="Tues">Tuesday</option>
          <option value="Wed">Wednesday</option>
          <option value="Thurs">Thursday</option>
          <option value="Fri">Friday</option>
          <option value="Sat">Saturday</option>
        </select>
        <button type="submit" onClick={onChangeDate}>Change Date</button>
      <button onClick={() => onDeleteRecipe()}>Delete</button>
    </div>
  )
}

export default CalendarCard