import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import AddIcon from '@mui/icons-material/Add';
import swip1 from "../../assets/swipper1.jpg"
import swip2 from "../../assets/swip2.jpg"
import swip3 from "../../assets/swip3.jpg"
import swip4 from "../../assets/swip4.jpg"
import swip5 from "../../assets/swip5.jpg"
import EastIcon from '@mui/icons-material/East';
// css 
import "./Third.css"
// Swiper
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Third = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
};

const handleMouseLeave = () => {
    setShowInfo(false);
};


  return (
    <div className=''>
     <div className='hero3'>
        <div className='pt-[150px] ml-[50px]'>
            <p className='text-[30px] text-white'>Understanding our planet to benefit humankind</p>
        </div>      

      <div className='flex flex-wrap justify-center gap-[30px] mt-[50px]'>
        <div className='w-[30%] card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[gold]'>Carbon Diozide</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[gold]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>
       
        <div className='w-[30%] card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#F38478]'>Global Temperature</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 1.1 C Sence preindustrial</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#F38478]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>
       
        <div className='w-[30%] card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#FF984B]'>Methane</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 1923.6 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#FF984B]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>

        <div className='w-[30%] card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[24px] font-bold text-[#8098C0]'>Artic Sea Ice Minimum Extent</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#8098C0]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>

        <div className='w-[30%] card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#AB9AE0]'>Ice Sheetst</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#AB9AE0]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>

        <div className='w-[30%] card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#76A9B9]'>Sea level</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#76A9B9]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>

        <div className='w-[30%] card1 p-[20px] flex  justify-between items-center' >
         <div>
          <h1 className='text-[40px] text-[#57A5E7]'>Ocean Warming</h1>
          <p className='text-[white] text-[24px]'><ArrowUpwardOutlinedIcon/> 420 parts per million</p>
          </div>  
          
          <div>
          <button><AddIcon className='text-[#57A5E7]' sx={{fontSize:"45px"}}/></button>
          </div>
        </div>
      </div>
      </div> 


      <div  className='bg-[black] h-[100vh]'>
        <div>
          <p className='text-[white] text-[50px] ml-[75px] pt-[30px]'>News & Future</p>
        </div>

     <div className='px-[5%] pt-[50px]'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href=""  className=''><img src={swip1}  alt="" /></a>
            {showInfo && <div className="info  w-[100%] h-[310px] text-black"> Scientists using 
            space-based radar found that in New Yourk CIty is sinking at varying rates from humen and natural factors. 
            a few  spots are rising.</div>}
          </div>

        </SwiperSlide>
        
        <SwiperSlide>
         <div className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href=""><img src={swip2}  alt="" /></a>
          {showInfo && <div className="info  w-[100%] h-[310px] text-black">The annual Arctic sea ice minimum (lowest) 
          annual extent was the sixth-lowest on record this year, while Antarctic sea ice reached its lowest maximum ever.
            These both continue a long-term downward trend due to human-caused global warming </div>}
        </div> 
          </SwiperSlide>
        <SwiperSlide>
          <div className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href=""><img src={swip3}  alt="" /></a>
            {showInfo && <div className="info  w-[100%] h-[310px] text-black"> The international Surface Water and
             Ocean Topography mission is able to measure ocean features, like El Niño, 
             closer to a coastline than previous space-based missions.</div>}
          </div>        
        </SwiperSlide>
        
        <SwiperSlide>
          <div  className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href=""><img src={swip4}  alt="" /></a>
          {showInfo && <div className="info  w-[100%] h-[310px] text-black"> The instrument will enable nonprofit
           organization Carbon Mapper to pinpoint and measure methane and carbon dioxide sources from space. </div>}
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='cont' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href=""><img src={swip5}  alt="" /></a>
          {showInfo && <div className="info  w-[100%] h-[310px] text-black"> Summer of 2023 was Earth’s hottest since global records began in 1880, according to scientists at NASA’s Goddard Institute of Space Studies (GISS) in New York.

</div>}
        </div>
        </SwiperSlide>
        
      </Swiper>
    </div> 
      </div>

      <div className='bg-[black]'>
        <div className='text-center pb-[50px]'>
          <p className='text-[white] text-[40px]'>What is Climate Change ?</p>
        </div>

      <div className='flex flex-wrap'>
        <div className='bg1 w-[50%] '>
          <div className='text-center pt-[20%]'>
          <h1 className='text-[30px] font-bold text-white'>Evedence</h1>
          <p className='text-[40px] w-[70%] m-[auto] text-[white] font-bold'>How Do We Know Climate Change is Real</p>
          </div>
        </div>

        <div className='bg2 w-[50%]'>
        <div className='text-center pt-[20%]'>
          <h1 className='text-[30px] font-bold text-white'>Causes</h1>
          <p className='text-[40px] w-[70%] m-[auto] text-[white] font-bold'>Why is Climate Change Happening</p>
          </div>
        </div>

        <div className='bg3 w-[50%]'>
        <div className='text-center pt-[20%]'>
          <h1 className='text-[30px] font-bold text-white'>Effects</h1>
          <p className='text-[40px] w-[70%] m-[auto] text-[white] font-bold'>What Are the Effects of Climate Change</p>
          </div>
        </div>
        
        <div className='bg4 w-[50%]'>
        <div className='text-center pt-[20%]'>
          <h1 className='text-[30px] font-bold text-white'>Sollution</h1>
          <p className='text-[40px] w-[70%] m-[auto] text-[white] font-bold'>What Is Being Done to Solve Climate Change </p>
          </div>
        </div>
      </div> 
      </div>

      <div className='bg-[#E2F0FD] h-[100vh]'>
        <div className='text-center'>
          <p className='pt-[50px] text-[30px] font-bold'>Climate Change Resources</p>
          <p className='w-[40%] pt-[20px] m-[auto] text-[24px] font-bold'>An extensive collection of global warming resources for media, educators, weathercasters, and public speakers.</p>
        </div>

      
      <div className=''>
        <div>
          <p className='text-[30px] ml-[295px] mb-[30px] font-bold'>Explore</p>
        </div>

        <div className='flex m-[auto]  text-[18px]   w-[60%] justify-between'>
          <div>
            <p className='font-bold'>Images Of Ghange</p>
          </div>
          
          <div>
            <p>Before-and-after images of Earth</p>
          </div>

          <div>
            <EastIcon/>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <p className='font-bold'>Global Ice Viever</p>
          </div>
          
          <div>
            <p>Climate Change's Impact on Ice</p>
          </div>

          <div>
            <EastIcon/>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <p className='font-bold'>Earcth Minute Videos</p>
          </div>
          
          <div>
            <p>Animated video series illustrating Earth science topics</p>
          </div>

          <div>
            <EastIcon/>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <p className='font-bold'>Images Of Ghange</p>
          </div>
          
          <div>
            <p>Climate change in recent history</p>
          </div>

          <div>
            <EastIcon/>
          </div>
        </div>
      </div>

      <div>
        <p className='text-[24px] ml-[295px] mt-[35px] font-bold'>Resourses</p>
      </div>

        
      <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <p className='font-bold'>Multimedia</p>
          </div>
          
          <div>
            <p>Vast library if images, videos, graphics, and more</p>
          </div>

          <div>
            <EastIcon/>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <p className='font-bold'>En espanol</p>
          </div>
          
          <div>
            <p> Creciente biblioteca de recursos en espanol</p>
          </div>

          <div>
            <EastIcon/>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <p className='font-bold'>For Education</p>
          </div>
          
          <div>
            <p> Student and educator resourses</p>
          </div>

          <div>
            <EastIcon/>
          </div>
        </div>

        <div className='flex m-[auto] text-[18px]   w-[60%] justify-between mt-[10px]'>
          <div>
            <p className='font-bold'>For Kids</p>
          </div>
          
          <div>
            <p>Webquests, Climate Kids , and more</p>
          </div>

          <div>
            <EastIcon/>
          </div>
        </div>

      


      </div>


    </div>
  )
}

export default Third