import { useState } from 'react'

function AddDate({ trigger, setTrigger, recipe }) {
  const [day, setDay] = useState('')
  const [week, setWeek] = useState('')

  const onAddDate = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: `${day}${week}` })
    })
    .then(res => res.json())
    .then(() => setTrigger(false))
  }

  return (trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>X</button>
        <form onSubmit={onAddDate}>
            <label>Week: </label>
            <select onChange={e => setWeek(e.target.value)}>
              <option></option>
              <option value="1">Week 1</option>
              <option value="2">Week 2</option>
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
            <button>Add Date</button>
          </form>
      </div>
    </div>
  ): null )
}

export default AddDate