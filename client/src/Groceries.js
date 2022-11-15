import { useState, useEffect } from 'react'

function Groceries({ currentUser }) {
  const [groceries, setGroceries] = useState([])

  useEffect(() => {
    if (!!currentUser.id) {
    fetch(`/groceries/${currentUser.id}`)
      .then(res => res.json())
      .then(setGroceries)
    }
  }, [currentUser])

  return(
    <div>
      <h1>Groceries</h1>
      {groceries.map(item =>
        <p key={item}>{item}</p>
      )}
    </div>
  )
}

export default Groceries