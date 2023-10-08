import React from 'react'
import "./fourth.css"

import IMG from "../../images/1.jpg"
import Card from '../../component/card/Card'

const Forth = () => {
  return (
    <div className='all h-[auto] pb-[5%] ddd'>
      <video src="src/videos/video3.mp4" autoPlay loop className='w-[100%]'> 
    <source src='src/videos/video3.mp4' type='video/mp4' />
  </video>
      <div className="flex ml-[10%] pt-[5%] w-[50%] justify-between items-center ">
        <hr className='w-[50%] text-[30px] text-[red] aaa ' />
        <h1 className='aaa     text-[40px]'>Lorem, ipsum dolor.</h1>
      </div>
      <h1 className='text-[45px] w-[80%] m-auto pt-[5%] aaaa'>We enable machines to see and understand the world. In every dimension</h1>
      {/* all */}
    <div className="flex justify-evenly px-[4%] mt-[5%]">
      <h1 className='w-[40%] text-[20px] text-[white]'>At pmd we develop cutting-edge 3D image sensors and system components based on the Time-of-Flight (ToF) principle. With our advanced and unique depth-sensing technology, we help products from every industry to see, understand, and recognize the world. Just like humans do. And actually better.</h1>
      <h1 className='w-[40%] text-[20px] text-[white]'>We bring secure face authentication and image beautification to <span className='text-[blue] font-[600] a'> smartphones </span>, gesture control and driver monitoring to <span className='text-[blue] font-[600] a'> cars</span>, localization and mapping (SLAM) to augmented reality headsets and autonomous navigation to <span className='text-[blue] font-[600] a'> robots and drones.</span></h1>
    </div>
    <div className="div w-[80%] m-auto mt-[3%]">
    <img src="src/images/2.jpg" alt="" className='m-auto ' />
    </div>
    <div className="div mt-[3%] bg-[white] w-[80%] m-auto">
      <div className="flex w-[100%] px-[10%] items-center m-auto">
        <hr className='w-[30%] h-[0.5vh] bg-[#F1677F]' />
        <h1 className='text-[#F1677F] ml-[20%] text-[20px]'>Markets</h1>
      </div>
      <h1 className='text-[50px] w-[100%] m-auto text-center mt-[5%] a1 font-[600]'> How can Time-of Flight enhance your product?     </h1>
    <div className="flex justify-evenly mt-[8%]">
      <div className="div w-[50%]">
      <h1 className='text-[30px] text-[black] w-[70%] m-auto'>Adding the smart to Smartphones</h1>
      <h1 className='w-[70%] text-[22px] pt-[2%] m-auto text-[black]'>With our specially developed Time-of-Flight (ToF) imagers for smartphones we are enabling exciting new applications and significantly improving existing ones.</h1>
      <h1 className='w-[50%] w mb-[5%] mt-[5%] text-center ml-[15%] h-[8vh] text-[20px] pt-[2%] font-[600] bg-[#4781ED] text-white'>Consumer Aplication</h1>
      </div>
      <img src="src/images/1.jpg" alt="" width={500} className='mb-[10%] m-auto' />
    </div>
    <div className="flex">
      <img src="src/images/1.jpg" alt="" width={500} className='m-auto'/>
      <div className="div w-[50%]">
      <h1 className='text-[30px] text-[black] w-[70%] m-auto'>Adding the smart to Smartphones</h1>
      <h1 className='w-[70%] text-[22px] pt-[2%] m-auto text-[black]'>With our specially developed Time-of-Flight (ToF) imagers for smartphones we are enabling exciting new applications and significantly improving existing ones.</h1>
      <h1 className='w-[50%] w mb-[5%] mt-[5%] text-center ml-[15%] h-[8vh] text-[20px] pt-[2%] font-[600] bg-[#4781ED] text-white'>Consumer Aplication</h1>
      </div>
    </div>
    <div className="flex justify-evenly mt-[8%]">
      <div className="div w-[50%]">
      <h1 className='text-[30px] text-[black] w-[70%] m-auto'>Adding the smart to Smartphones</h1>
      <h1 className='w-[70%] text-[22px] pt-[2%] m-auto text-[black]'>With our specially developed Time-of-Flight (ToF) imagers for smartphones we are enabling exciting new applications and significantly improving existing ones.</h1>
      <h1 className='w-[50%] w mb-[5%] mt-[5%] text-center ml-[15%] h-[8vh] text-[20px] pt-[2%] font-[600] bg-[#4781ED] text-white'>Consumer Aplication</h1>
      </div>
      <img src="src/images/1.jpg" alt="" width={500} className='mb-[10%] m-auto' />
    </div>
   
    <div className="flex w-[100%] px-[10%] items-center m-auto">
        <hr className='w-[30%] h-[0.5vh] bg-[#F1677F]' />
        <h1 className='text-[#F1677F] ml-[20%] text-[30px]'>News</h1>
      </div>
      <h1 className='text-[40px] w-[100%] m-auto ml-[10%] mt-[5%] a1 font-[600]'> Latest news. Stay up-to-date on 3D!</h1>
      <div className="flex justify-evenly mt-[5%]">
      <Card img={IMG} hewteg={"#pmd News,"} hewteg2={"#3D News, #News"} name={"German Chancellor and Indonesian President visit ifm and pmd"} about={"At Hanover Messe 2023, German Chancellor Olaf Scholz and Indonesian President Joko Widodo visited the booth of ifm and pmd."} data={"April 17, 2023"}/>
      <Card img={IMG} hewteg={"#pmd News,"} hewteg2={"#3D News, #News"} name={"German Chancellor and Indonesian President visit ifm and pmd"} about={"At Hanover Messe 2023, German Chancellor Olaf Scholz and Indonesian President Joko Widodo visited the booth of ifm and pmd."} data={"April 17, 2023"}/>
      <Card img={IMG} hewteg={"#pmd News,"} hewteg2={"#3D News, #News"} name={"German Chancellor and Indonesian President visit ifm and pmd"} about={"At Hanover Messe 2023, German Chancellor Olaf Scholz and Indonesian President Joko Widodo visited the booth of ifm and pmd."} data={"April 17, 2023"}/>
      </div>
    {/* all2 */}
    </div>


    {/*all */}
    </div>
  )
}

export default Forth