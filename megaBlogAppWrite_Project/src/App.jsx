
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login,logout } from './store/authSlice';
import './App.css'
import { Header, Footer } from './components'; 
import {Outlet} from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-400 to-orange-300 text-white">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-black bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-lg text-center">
          <h1 className="text-3xl font-semibold ">Welcome to the App</h1>
          <Outlet />
          <p className="mt-2 text-lg ">Your content goes here.</p>
        </div>
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App
