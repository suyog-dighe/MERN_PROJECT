import {useParams} from 'react-router-dom'

function User() {
    const {id} =useParams()
    return (
        <>
        <h1 className='py-3 px-3'>Suyog Dighe </h1>
        <div className='py-3 px-4 mx-auto w-1/2 bg-gray-600 mb-4 text-white text-center rounded-lg'>
        User : {id}
        </div>
        </>
    )
}
export default User