

import {useLoaderData} from 'react-router-dom'
const Github = () => {
    const data=useLoaderData()    

    // const [data,setData]= useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/suyog-dighe')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])

    return (
        <div className='py-3 mt-4 px-4 mx-auto w-1/2 bg-gray-600 mb-4 text-white text-center rounded-lg'>
            <img className='w-80 h-80' src={data.avatar_url} alt='git pic' />
            Github Followers : {data.followers}
        </div>
    );
}

export default Github;

 export const githubInfo = async () => {
   const response = await fetch("https://api.github.com/users/suyog-dighe");
   return response.json();
 };
