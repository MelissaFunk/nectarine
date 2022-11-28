import { useState } from 'react'

function CalendarCard({ recipe }) {
  const [day, setDay] = useState('')

  const onRemoveDate = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: null, has_made: true })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
  }

  const onChangeDate = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: `${day}` })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
  }

  return(
    <div className="calendar-card">
      <h4 className="calendar-card-h3"><a href={recipe.link} target="_blank" rel="noreferrer">{recipe.name}</a></h4>
      <img src={recipe.image} alt={recipe.name}/>
        <p></p>
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
        <p></p>
        <button type="submit" onClick={onChangeDate}>Change Date</button>
      <button onClick={() => onRemoveDate()}>Made/Remove</button>
    </div>
  )
}

export default CalendarCard