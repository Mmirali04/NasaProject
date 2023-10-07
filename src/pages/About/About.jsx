import React from 'react'
import "./About.css"
import IMG from "../../assets/water.jpg"
import IMG1 from "../../assets/neravenstvo.webp"
import IMG2 from "../../assets/New-global-view.max-1000x1000.jpeg"
import IMG3 from "../../assets/water.jpg"

const About = () => {
  return (
    <div>About
      <div className="flex p-[5%]"></div>
      <div className="div relative">

      <div className='banner1'>
        <img src={IMG} alt=""  className='i'/>
        <div className='text'>
          <h1 className='text-[25px]'>Lorem ipsum dolor sit.</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus, dolore ullam at repellat officiis suscipit? Ad cumque modi ipsum!</h1>
        </div>
      </div>
      <div className='banner2'>
        <img src={IMG1} alt=""  className='i'/>
        <div className='text'>
          <h1 className='text-[25px]'>Lorem ipsum dolor sit.</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus, dolore ullam at repellat officiis suscipit? Ad cumque modi ipsum!</h1>
        </div>
      </div>
      <div className='banner3'>
        <img src={IMG2} alt=""  className='i'/>
        <div className='text'>
          <h1 className='text-[25px]'>Lorem ipsum dolor sit.</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus, dolore ullam at repellat officiis suscipit? Ad cumque modi ipsum!</h1>
        </div>
      </div>
      <div className='banner4'>
        <img src={IMG3} alt=""  className='i'/>
        <div className='text'>
          <h1 className='text-[25px]'>Lorem ipsum dolor sit.</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus, dolore ullam at repellat officiis suscipit? Ad cumque modi ipsum!</h1>
        </div>
      </div>



      {/* relative */}
      </div>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, magni enim sint, officia quaerat dolores quos, aperiam earum ea fugiat natus inventore nostrum molestias recusandae reiciendis omnis laborum! Unde, veritatis!</h1>
    </div>
  )
}

export default About