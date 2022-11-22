import { useState } from 'react'

function AddRecipe({ trigger, setTrigger, currentUser }) {
  const [day, setDay] = useState('')
  const [week, setWeek] = useState('')

  const onAddRecipe = (e) => {
    e.preventDefault()
    fetch('/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.name.value,
        image: e.target.image.value,
        link: e.target.link.value,
        cuisine: e.target.cuisine.value,
        ingredients: e.target.ingredients.value,
        date: `${day}${week}`,
        cook_time: e.target.cook_time.value,
        is_favorite: false,
        has_made: false,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
    e.target.reset()
  }

  return (trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>X</button>
        <form onSubmit={onAddRecipe}>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="text" name="image" placeholder="Image URL"></input>
          <input type="text" name="link" placeholder="Link URL"></input>
          <input type="text" name="ingredients" placeholder="Ingredients"></input>
          <input type="text" name="cook_time" placeholder="Cook Time"></input>

          <p>Calendar: </p>
          <label>Week: </label>
          <select onChange={e => setWeek(e.target.value)}>
            <option></option>
            <option value="1">Week 1</option>
            <option value="2">Week 2</option>
            <option value="3">Week 3</option>
            <option value="4">Week 4</option>
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
          <button>Add Recipe</button>
        </form>
      </div>
    </div>
  ): null )
}

export default AddRecipe
