import { useState } from 'react'

function AddRecipe({ trigger, setTrigger, currentUser }) {
  const [week, setWeek] = useState("")
  const [day, setDay] = useState("")

  const weekSelect = (e) => {
    setWeek(e.target.value)
  }

  const daySelect = (e) => {
    setDay(e.target.value)
  }
 
  const handleAddREcipe = (e) => {
    e.preventDefault()
    fetch('/recipes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: currentUser.id,
        title: e.target.title.value,
        image: e.target.image.value,
        link: e.target.link.value,
        ingredients: e.target.ingredients.value,
        date: `${day}${week}`
      })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
    e.target.reset()
    setTrigger(false)
  }
 
  return (trigger ? (
    <div className="popup">
      <div className="popup-inner">
      <button className="close-btn" onClick={() => setTrigger(false)}>X</button>
        <form onSubmit={handleAddREcipe}>
        <input type="text" name="title" placeholder="Title"/>
        <input type="text" name="image" placeholder="Image URL"/>
        <input type="text" name="link" placeholder="Link"/>
        <input type="text" name="ingredients" placeholder="Ingredients"/>

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
        
        <button className="addrecipe-btn">Add Recipe</button>
        </form>
      </div>
    </div>
  ): null)
}

export default AddRecipe

