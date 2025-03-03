import React, { useState } from 'react'
import {Link, link, useLocation, useNavigation} from 'react-router-dom'
import BsSearch from 'react-icons/bs'
import FaBars from 'react-icons/fa'
import Menu from './Menu'



function NavBar() {
const [promt, setPrompt] = useState("")
const [menu, setMenu] = useState(false)
const navigate= useNavigation()
const path =useLocation().pathname
const showMenu=() => {
  setMenu(!Menu)
}

const {user}= userContext(UserContext)
  return (
    <div>
      <div className='flex items-center justify-between px-6 md:px-[200px] py-4 bg-black text-white'>
        <h1 className='text-lg md:text-xl front-extrabold'> <link to="/"> Blogosphere </link>
        </h1>
        {path =="/" && <div onChange={(e) => setPrompt(e.target.value)} className='flex justify-center items-center space-x-0 '>
          <input className=' outline-none rounded-l-xl px-3 text-black bg-white' placeholder='search a post' type='text'/> 
          <p onClick={ ()=> navigate(promt? "search "+ promt: navigate("/"))} className='cursor-pointer p-1 bg-white text-black rounded-r-xl'>
          <BsSearch/>
          </p>
        </div>}

<div className='hidden md:flex items-center justify-center space-x-2 md:space-x-4'>
  {
    user ? <h3> <link to='/white'> Write </link></h3> : <h3>
    </h3>
  } 
{user ? <div onClick={showMenu}>
  <p className='cursor-pointer relative'></p>
  <FaBars/>
  {menu && <menu/>}
  </div > : <h3> <Link to='/register'> Register </Link> </h3>}
   </div>
   <div onClick={showMenu} className='md: hidden text-lg'>
    <p className='cursor-pointer relative'>
      <FaBars/> </p> 
      {menu && <Menu/>}


</div>
      </div>
    </div>
  )
}

export default NavBar
