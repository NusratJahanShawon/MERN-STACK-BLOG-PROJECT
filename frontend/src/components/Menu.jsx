import React from 'react'
import { userContext } from '../context/UserContext'
import { useContext } from "react"
import axios from 'axios'
import {Link, useNavigation} from "react-router-dom"


function Menu() {
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
  const navigate= useNavigation()
  const handlelogout =async() => {
    try {
      const res= await axios.get("/api/auth/logout", {withCredentials:true})
      setUser(null)
      navigate("/login")
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <div className='bg-black w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4'> 
      { 

      !user && <h3 className='text-white text-sm hover:text-gray-500 cursor-po'>
        <link to='/login'> Login </link>
      </h3>
      }
      {
      !user && <h3 className='text-white text-sm hover:text-gray-500 cursor-po'>
        <link to='/register'> Register </link>
      </h3>
      }
{
      !user && <h3 className='text-white text-sm hover:text-gray-500 cursor-po'>
        <link to={'/profile/' + user._id}>Profile  </link>
      </h3>
      }

{
      !user && <h3 className='text-white text-sm hover:text-gray-500 cursor-po'>
        <link to={'/write'}> Write  </link>
      </h3>
      }

{
      !user && <h3 className='text-white text-sm hover:text-gray-500 cursor-po'>
        <link to={'/myblogs/' + user._id}>My Blogs  </link>
      </h3>
      }
      {
      !user && <h3 className='text-white text-sm hover:text-gray-500 cursor-po' onClick={handlelogout}>
         Log Out   
      </h3>
      }
    </div>
  )
}

export default Menu
    