import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../assets/logo.svg"

// Css 
import "./Layout.css"
const Layout = () => {
  return (
  <div>
    <div className=''>
      <div className='bgg flex items-center p-[1%]  justify-between w-[100%] pl-[10%] pt-[1%] pr-[5%] text-[gold]'>
        <div> 
          <img src={logo} className='' alt="" />
        </div>

        <div className=' lii flex gap-[20px] items-center'>
          <Link to={"/"}>
            <li>
              Home
            </li>
          </Link>
          <Link to={"About"}>
            <li>
              Nasa
            </li>
          </Link>
          <Link to={"Third"}>
            <li>
              Climat
            </li>
          </Link>
          <Link to={"Forth"}>
            <li>
              USGS
            </li>
          </Link> 
          <Link to={"Fifth"}>
            <li>
              Социальное
            </li>
          </Link>
           <Link to={"Six"}>
            <li>
            USDA
            </li>
          </Link>  
          <Link to={"Seven"}>
            <li>
            EPA
            </li>
          </Link>
        </div>



      </div>
    
    </div>
    

   <Outlet/>

    <div className='Footer'>

    </div>


    </div>
  )
}

export default Layout