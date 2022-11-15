function AddRecipe({ trigger, setTrigger, currentUser }) {

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
        ingredients: e.target.ingredients.value
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
        <h1>Add Recipe</h1>
        <form onSubmit={handleAddREcipe}>
        <input type="text" name="title" placeholder="Title"/>
        <input type="text" name="image" placeholder="Image URL"/>
        <input type="text" name="link" placeholder="Link"/>
        <input type="text" name="ingredients" placeholder="Ingredients"/>
        <button>Add Recipe</button>
        </form>
      </div>
    </div>
  ): null)
}

export default AddRecipe

