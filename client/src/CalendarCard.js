import { useState } from 'react'

function CalendarCard({ recipe, handleDeleteRecipe }) {
  const [week, setWeek] = useState("")
  const [day, setDay] = useState("")

  const weekSelect = (e) => {
    setWeek(e.target.value)
  }

  const daySelect = (e) => {
    setDay(e.target.value)
  }

  const handleChangeDate = (e) => {
    e.preventDefault()
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ date: `${day}${week}` })
    })
    .then(res => res.json())
    .then(console.log(recipe.date))
  }

  const handleDeleteClick = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((recipe) => handleDeleteRecipe(recipe))
  }

  return(
    <div className="calendar-card">
      <a href={recipe.link} target="_blank" rel="noreferrer"><h4>{recipe.title}</h4></a>
      <img src={recipe.image} alt={recipe.title}/>
      <form onSubmit={e => handleChangeDate(e)}>
        <select className="select-left" onChange={e => weekSelect(e)}>
          <option>Week:</option>
          <option value="1">This Week</option>
          <option value="2">Next Week</option>
        </select>
        <select onChange={e => daySelect(e)}>
          <option>Day:</option>
          <option value="Sun">Sunday</option>
          <option value="Mon">Monday</option>
          <option value="Tues">Tuesday</option>
          <option value="Wed">Wednesday</option>
          <option value="Thurs">Thursday</option>
          <option value="Fri">Friday</option>
          <option value="Sat">Saturday</option>
        </select>
        <button>Change Date</button>
      </form>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default CalendarCard