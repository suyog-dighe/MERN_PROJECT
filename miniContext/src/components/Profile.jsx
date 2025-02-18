import { useContext } from 'react'; 
import UserContext from '../context/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);

    if(!user) return <div  className='bg-gray-300 py-3 rounded-lg mt-2 text-black'>please Login</div>
    return (
      <div className="bg-gray-300 py-3 rounded-lg mt-2 text-black">
        Welcome {user.username}
      </div>
    );
}

export default Profile;
