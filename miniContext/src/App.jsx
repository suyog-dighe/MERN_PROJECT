
import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h2 className="text-2xl text-white mb-3 bg-purple-500 p-3 rounded-lg">
        Suyog Dighe with New Beginning......!!
      </h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App
