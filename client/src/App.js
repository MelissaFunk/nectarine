import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Login from './Login'
import AddRecipe from './AddRecipe'
import MyRecipes from './MyRecipes'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  return (
    <div>
      {currentUser.username ? <NavBar /> : null}
      <Switch>
        <Route exact path="/"><Login setCurrentUser={setCurrentUser}/></Route>
        <Route exact path="/add-recipe"><AddRecipe currentUser={currentUser}/></Route>
        <Route exact path="/my-recipes"><MyRecipes currentUser={currentUser}/></Route>
      </Switch>
    </div>
  );
}

export default App;
