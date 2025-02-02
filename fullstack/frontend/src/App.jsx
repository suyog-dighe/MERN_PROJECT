import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data.jokes)
    })
    .catch((err)=>{
      console.log(err)
    })
  })


  return (
    <>
      <h1> Full Stack Developer Suyog Dighe </h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke) =>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
