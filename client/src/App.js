import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import MyRecipes from './MyRecipes'
import Planner from './Planner'
import Groceries from './Groceries'

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
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/signup"><SignUp /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/my-recipes"><MyRecipes /></Route>
        <Route exact path="/planner"><Planner /></Route>
        <Route exact path="/groceries"><Groceries /></Route>
      </Switch>
    </div>
  );
}

export default App;
