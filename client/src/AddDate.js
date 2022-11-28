import { useState } from 'react'

function AddDate({ trigger, setTrigger, recipe }) {
  const [day, setDay] = useState('')

  const onAddDate = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: `${day}` })
    })
    .then(res => res.json())
    .then(() => setTrigger(false))
  }

  return (trigger ? (
    <div className="popup2">
      <div className="popup-inner2">
        <button className="close-btn2" onClick={() => setTrigger(false)}>X</button> 
        <form onSubmit={onAddDate}>
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
            <button>Add Date</button>
          </form>
      </div>
    </div>
  ): null )
}

export default AddDate