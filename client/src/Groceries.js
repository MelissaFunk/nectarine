import { useState, useEffect } from 'react'

function Groceries({ currentUser }) {
  const [groceries, setGroceries] = useState([])

  useEffect(() => {
    if (!!currentUser.id) {
    fetch(`/groceries/${currentUser.id}`)
      .then(res => res.json())
      .then(data => setGroceries(data.filter((element, index) => {
        return data.indexOf(element) === index
      })))
    }
  }, [currentUser])

  return(
    <div>
      <h1>Groceries</h1>
      {groceries.map(item =>
        <li key={item}>{item}</li>
      )}
      <a href="https://www.instacart.com/store" 
      target="_blank" 
      rel="noreferrer">
      Instacart</a>
    </div>
  )
}

export default Groceries