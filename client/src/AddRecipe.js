function AddRecipe({ trigger, setTrigger, currentUser }) {

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
        date: null,
        cook_time: e.target.cook_time.value,
        is_favorite: false,
        has_made: false,
        user_id: currentUser.id
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
        <form onSubmit={onAddRecipe}>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="text" name="image" placeholder="Image URL"></input>
          <input type="text" name="link" placeholder="Link URL"></input>
          <input type="text" name="cuisine" placeholder="Cuisine"></input>
          <input type="text" name="ingredients" placeholder="Ingredients"></input>
          <input type="text" name="cook_time" placeholder="Cook Time"></input>
          <button>Add Recipe</button>
        </form>
      </div>
    </div>
  ): null )
}

export default AddRecipe
