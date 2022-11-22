import { useState } from 'react'
import { useHistory } from 'react-router'

function SignUp({ setCurrentUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  const onSignUpSubmit = (e) => {
    e.preventDefault()
    const user = { username: username, password: password }

    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          history.push('/my-recipes')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  return(
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onSignUpSubmit}>
        <input placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
        <button>Sign Up</button>
      </form>

      <div>{errors ? errors.map(error => (
          <p key={error}>{error}</p>
        )) : null}</div>
    </div>
  )
}

export default SignUp