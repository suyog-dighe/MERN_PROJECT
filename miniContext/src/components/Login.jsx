import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
      <div className='bg-gray-800 p-4 rounded-lg'>
        <h1 className="text-white bg-orange-500 mt-2 mb-2 pb-3 rounded-lg">
          Login
        </h1>
        <input
          className="bg-white text-black py-2 px-3 mt-3 mb-3 rounded-md mr-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          className="bg-white text-black py-2 px-3 mt-3 mb-3 rounded-md mr-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={HandleSubmit}
          className="bg-orange-400 text-black py-2 hover:bg-yellow-300 rounded-md cursor-pointer p-3"
        >
          Login
        </button>
      </div>
    );
}

export default Login;
