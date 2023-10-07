import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../assets/logo.svg"

// Css 
import "./Layout.css"
const Layout = () => {
  return (
  <div>
    <div className='hero'>
      <div className='flex justify-between ml-[10%] pt-[1%] pr-[5%]'>
        <div> 
          <img src={logo} alt="" />
        </div>

        <div className='text-[white] lii flex gap-[20px]'>
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
              NOAA
            </li>
          </Link>
          <Link to={"Forth"}>
            <li>
              USGS
            </li>
          </Link> 
          <Link to={"Fifth"}>
            <li>
              NIH
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
     <div className="lg:flex">
        <div className="text-white mt-[150px] ml-[10%] text-[100px] lg:w-[50%]">
          <p className="lg:w-[75%]">Welcome to info Hub</p>
        </div>

        <div className="circle sm:hidden lg:inline-block">
        <div className="earth hhhhh">
        </div>
        <div className="content">
            <div className="continents">
                <div className="continent one">
                    <a id="n-a" href="#north-america">North America</a>
                </div>
                <div className="continent two">
                    <a id="s-a" href="#south-america">south America</a>
                </div>
                <div className="continent three">
                    <a id="eur" href="#europe">Europe</a>
                </div>
                <div className="continent four">
                    <a id="afr" href="#africa">Africa</a>
                </div>
                <div className="continent five">
                    <a id="asi" href="#asia">Asia</a>
                </div>
                <div className="continent six">
                    <a id="aus" href="#australia">Australia</a>
                </div>
            </div>
        </div>
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