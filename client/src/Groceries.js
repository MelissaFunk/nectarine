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
    <div className="groceries-div">
      <h1>Groceries</h1>
      <a href="https://www.instacart.com/store" 
      target="_blank" 
      rel="noreferrer">
      <p>Instacart</p></a>
      <div className="grocery-div">
        {groceries.slice(0, 5).map(item =>
          <p key={item}>{item}</p>
        )}
      </div>
      <div className="grocery-div">
        {groceries.slice(6, 11).map(item =>
          <p key={item}>{item}</p>
        )}
      </div>
      <div className="grocery-div">
        {groceries.slice(12, 21).map(item =>
          <p key={item}>{item}</p>
        )}
      </div>
      <div className="grocery-div">
        {groceries.slice(22, 31).map(item =>
          <p key={item}>{item}</p>
        )}
      </div>
      <div className="grocery-div">
        {groceries.slice(32, 41).map(item =>
          <p key={item}>{item}</p>
        )}
      </div>
      <div className="grocery-div">
        {groceries.slice(42, 51).map(item =>
          <p key={item}>{item}</p>
        )}
      </div>
    </div>
  )
}

export default Groceries