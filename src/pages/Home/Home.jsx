import React from 'react'
import climat from "../../assets/Climat.svg"
import second from "../../assets/second.svg"
import third from "../../assets/third.svg"
import forth from "../../assets/forth.svg"
import nasa1 from "../../assets/nasas.svg"
import nasa2 from "../../assets/nasa2.svg"
import nasa3 from "../../assets/nasa3.svg"
import nasa4 from "../../assets/nasa4.svg"
import nasa5 from "../../assets/nasa5.svg"
import nasa6 from "../../assets/nasa6.svg"

 import "./Home.css"

const Home = () => {
  return (
    <div>
      <div className='hero'>
      <div className="lg:flex">
        <div className="text-white mt-[150px] ml-[10%]  lg:w-[50%]">
          <p className="lg:w-[75%] text-[100px] mt-[100px]">Welcome to info Hub</p>
        </div>

        <div className="circle sm:hidden lg:inline-block mt-[100px]">
        <div className="earth hhhhh">
        </div>
        <div className="content">
            <div className="continents">
                <div className="continent one">
                    <a id="n-a" href="https://www.google.ru/maps/place/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D1%8F+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0/@29.0686106,-153.5784602,3z/data=!3m1!4b1!4m6!3m5!1s0x52b30b71698e729d:0x131328839761a382!8m2!3d54.5259614!4d-105.2551187!16zL20vMDU5ZzQ?entry=ttu">North America</a>
                </div>
                <div className="continent two">
                    <a id="s-a" href="https://www.google.ru/maps/place/%D0%AE%D0%B6%D0%BD%D0%B0%D1%8F+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0/@-13.5554014,-109.8572333,3z/data=!3m1!4b1!4m6!3m5!1s0x9409341c355d34b5:0x69d40ccfc9c6e32b!8m2!3d-8.783195!4d-55.491477!16zL20vMDZuM3k?entry=ttu">south America</a>
                </div>
                <div className="continent three">
                    <a id="eur" href="https://www.google.ru/maps/place/%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/@47.5479471,1.0083866,4z/data=!3m1!4b1!4m6!3m5!1s0x46ed8886cfadda85:0x72ef99e6b3fcf079!8m2!3d54.5259614!4d15.2551187!16zL20vMDJqOXo?entry=ttu">Europe</a>
                </div>
                <div className="continent four">
                    <a id="afr" href="https://www.google.ru/maps/place/%D0%90%D1%84%D1%80%D0%B8%D0%BA%D0%B0/@1.4494091,-26.6488949,3z/data=!3m1!4b1!4m6!3m5!1s0x10a06c0a948cf5d5:0x108270c99e90f0b3!8m2!3d-8.783195!4d34.508523!16zL20vMGRnM24x?entry=ttu">Africa</a>
                </div>
                <div className="continent five">
                    <a id="asi" href="https://www.google.ru/maps/place/%D0%90%D0%B7%D0%B8%D1%8F/@29,100,3z/data=!3m1!4b1!4m6!3m5!1s0x3663f18a24cbe857:0xa9416bfcd3a0f459!8m2!3d34.047863!4d100.6196553!16zL20vMGowaw?entry=ttu">Tajikistan</a>
                </div>
                <div className="continent six">
                    <a id="aus" href="https://www.google.ru/maps/place/%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F/@-18.7342503,87.0416775,3z/data=!3m1!4b1!4m6!3m5!1s0x2b2bfd076787c5df:0x538267a1955b1352!8m2!3d-25.274398!4d133.775136!16zL20vMGNoZ2h5?entry=ttu">Australia</a>
                </div>
            </div>
        </div>
    </div>

      </div> 
      </div>



        <div className='flex mt-[100px] items-center'>
          <div className='w-[35%]'>
              <img src={climat} className='m-[auto]' alt="" />
          </div>

        <div className='w-[60%]'>
            <p className='text-[80px]'>Climate change</p>
            <p className='text-[30px]'>Rising global temperatures, changing weather patterns, and rising sea levels are caused by greenhouse gas emissions and ecosystem destruction.</p>
            <button className='border w-[120px] p-[10px] bg-[red] text-[white]'>Read More</button>
        </div>
        </div>    

      <div className='flex'>
        <div className='w-[70%] m-[auto]'>
         <div className='w-[70%] m-[auto]'>
          <p className='text-[80px]'>Water issues</p>
          <p className='text-[30px]'>Lack of clean drinking water, water pollution, and improper water resource management pose threats to human health and life.</p>
          <button className='border w-[120px] p-[10px] bg-[red] text-[white]'>Read More</button>
          </div> 
        </div>

        <div className='w-[30%]'>
          <img src={second} alt="" />
        </div>

      </div>



      <div className='flex mt-[100px] items-center'>
          <div className='w-[35%]'>
              <img src={third} className='m-[auto]' alt="" />
          </div>

        <div className='w-[60%]'>
            <p className='text-[80px]'> Health and epidemics</p>
            <p className='text-[30px]'>The spread of infectious diseases, lack of access to quality medical care, and the threat of pandemics have a significant impact on public health.</p>
            <button className='border w-[120px] p-[10px] bg-[red] text-[white]'>Read More</button>
        </div>
        </div> 


        <div className='flex'>
        <div className='w-[70%] m-[auto]'>
         <div className='w-[70%] m-[auto]'>
          <p className='text-[50px]'>Negative Impact of Technology</p>
          <p className='text-[30px]'>While technology has many positive aspects and benefits, it can also have negative consequences.</p>
          <button className='border w-[120px] p-[10px] bg-[red] text-[white]'>Read More</button>
          </div> 
        </div>

        <div className='w-[30%]'>
          <img src={forth} alt="" />
        </div>

      </div>

      <div className='flex flex-wrap justify-center mt-[50px]'>
        <div>
          <img src={nasa1} alt="" />
        </div>
       
        <div>
          <img src={nasa2} alt="" />
        </div>
       
        <div>
          <img src={nasa3} alt="" />
        </div>
       
        <div>
          <img src={nasa4} alt="" />
        </div>
       
        <div className='mt-[30px]'>
          <img src={nasa5} alt="" />
        </div>
       
        <div className='mt-[30px] ml-[20px]'>
          <img src={nasa6} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home