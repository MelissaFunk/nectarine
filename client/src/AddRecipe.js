import { useState } from 'react'

function AddRecipe({ currentUser }) {
  const [dinner, setDinner] = useState("")
  const [lunch, setLunch] = useState("")
  const [breakfast, setBreakfast] = useState("")
  const [dessert, setDessert] = useState("")
  const [asian, setAsian] = useState("")
  const [italian, setItalian] = useState("")
  const [mexican, setMexican] = useState("")
  const [american, setAmerican] = useState("")

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
        category: `${dinner} ${lunch} ${breakfast} ${dessert} ${asian} ${italian} ${mexican} ${american}`,
        ingredients: e.target.ingredients.value
      })
    })
    .then(res => res.json())
    .then(recipe => console.log(recipe))
    e.target.reset()
  }

  return (
    <div>
      <h1>Add Recipe</h1>
      <form onSubmit={handleAddREcipe}>
      <input type="text" name="title" placeholder="Title"/>
      <input type="text" name="image" placeholder="Image URL"/>
      <input type="text" name="link" placeholder="Link"/>
      <input type="text" name="ingredients" placeholder="Ingredients"/>
      <label>Dinner</label>
      <input type="checkbox" onClick={() => setDinner("Dinner")}/>
      <label>Lunch</label>
      <input type="checkbox" onClick={() => setLunch("Lunch")}/>
      <label>Breakfast</label>
      <input type="checkbox" onClick={() => setBreakfast("Breakfast")}/>
      <label>Dessert</label>
      <input type="checkbox" onClick={() => setDessert("Dessert")}/>
      <label>Asian</label>
      <input type="checkbox" onClick={() => setAsian("Asian")}/>
      <label>Italian</label>
      <input type="checkbox" onClick={() => setItalian("Italian")}/>
      <label>Mexican</label>
      <input type="checkbox" onClick={() => setMexican("Mexican")}/>
      <label>American</label>
      <input type="checkbox" onClick={() => setAmerican("American")}/>
      <button>Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipe

