
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'; 
import axios from 'axios'


function Form() {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [mail,setMail]=useState("")

    function handleNavi () {
        navigate('/')
    }
    useEffect(()=>{
      axios.get('/api/form')
      .then((res)=>{
        setName(res.data.name)
        setMail(res.data.mail)
      })
      .catch((err)=>{
        console.log(err)
      });
    },[]);
  return (
    <div className="text-center">
      <h2 className="mb-3 text-black">Form Page</h2>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white rounded-lg mb-4 p-2"
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={mail} 
          onChange={(e) => setMail(e.target.value)}
          className="bg-white rounded-lg p-2" />
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-red-500"
        >
          Submit
        </button>
        <button
                  type="button"
                  onClick={handleNavi}
          className="mt-4 p-2 ml-4 bg-blue-500 text-white rounded hover:bg-red-500"
        >
          Back To Home
        </button>
      </form>
    </div>
  );
}

export default Form;
