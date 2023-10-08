import React from 'react'
import "./About.css"
import IMG from "../../images/img1.png"
import IMG1 from "../../images/img2.png"
import IMG2 from "../../images/туц.jpg"
// import IMG3 from "../../images/img4.png"

const About = () => {
  return (
    <div className="all ">

        <div>
      <div className="flex p-[5%]"></div>
      <div className="div relative mt-[-4.5%] dd">

      <div className='banner1'>
        <img src={IMG} alt=""  width={50} className='i '/>
        <div className='text '>
          <h1 className='text-[25px]'>Lorem ipsum dolor sit.</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus, dolore ullam at repellat officiis suscipit? Ad cumque modi ipsum!</h1>
        </div>
      </div>
      <div className='banner2'>
        <img src={IMG1} alt="" width={50}  className='i '/>
        <div className='text'>
          <h1 className='text-[25px]'>Lorem ipsum dolor sit.</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus, dolore ullam at repellat officiis suscipit? Ad cumque modi ipsum!</h1>
        </div>
      </div>
      <div className='banner3'>
        <img src={IMG2} alt=""  className='i h-[100vh]' width={50} />
        <div className='text'>
          <h1 className='text-[25px]'>Lorem ipsum dolor sit.</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus, dolore ullam at repellat officiis suscipit? Ad cumque modi ipsum!</h1>
        </div>
      </div>
      



      {/* relative */}
      </div>
    </div>

    <div className="div mt-[43%]">
      <h1>asda</h1>
      <div className="div h-[30vh] w-[100%]" >

  
 
      </div>
  
    </div>

  


    {/* all */}
    </div>

  
)}

export default About