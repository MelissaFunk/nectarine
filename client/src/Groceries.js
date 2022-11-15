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
        <div key={item}>
        <span>{item}</span>
        </div>
      )}
    </div>
  )
}

export default Groceries