import { useEffect, useState } from 'react'

function Home() {
  const [random5, setRandom5] = useState([])

  useEffect(() => {
    fetch('/recipes')
    .then(res => res.json())
    .then(data => setRandom5(data))
  }, [])

  return(
    <div>
      <h1>Home</h1>
      {random5.map(rec => 
        <h4>{rec.name}</h4>
      )}
    </div>
  )
}

export default Home