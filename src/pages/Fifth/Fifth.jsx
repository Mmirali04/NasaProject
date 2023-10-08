import React from 'react'
import tarozu from "../../assets/tarozu.svg"
import neraven1 from "../../assets/neraven1.svg"
import neraven2 from "../../assets/neraven2.svg"
import neraven3 from "../../assets/neraven3.svg"
import neraven4 from "../../assets/neraven4.svg"
import nasa1 from "../../assets/nasas.svg"
import nasa2 from "../../assets/nasa2.svg"
import nasa3 from "../../assets/nasa3.svg"
import nasa4 from "../../assets/nasa4.svg"
import nasa5 from "../../assets/nasa5.svg"
import nasa6 from "../../assets/nasa6.svg"


const Fifth = () => {
  return (
    <div className='pt-[100px]'>
      <div>
      <img src={tarozu} className='w-[100%]' alt="" />
      </div>

      <div>
        <div>
          <p className='text-[40px] text-end mt-[20px] pr-[100px] text-[#00B3FF]'>Социальное неравенство это ?</p>
          <hr className=' mt-[10px] w-[50%] float-right mr-[50px] bg-[black] h-[3px]' />
        </div>
      </div>

    <div className='flex mt-[20px] items-center'>
      <div className='w-[30%] '>
        <img src={neraven1} className='m-[auto]' alt="" />
      </div>

      <div className='w-[56%]  mt-[-40px]'>
        <p className='text-[28px]'>Социальное неравенство относится к неравному распределению ресурсов, возможностей и привилегий среди отдельных лиц или групп в обществе.</p>
      </div>
    </div>

    <hr className='h-[3px] bg-[black] w-[50%] ml-[50px] mt-[50px]' />


    <div className='mt-[50px]'>
      <div className='inline-block'>
        <p className='text-[40px] ml-[70px] text-[#00B3FF] '>Типы неравенства</p>
      </div>
      
      <div className='flex items-center mt-[-40px]'>
        <div className='w-[60%]'>
          <p className='text-[24px] ml-[60px]'>Социальное неравенство может проявляться в различных формах, включая экономическое неравенство, образовательное неравенство , медицинское неравенство и социальную мобильность</p>
        </div>

        <div className='w-[30%]'>
          <img src={neraven2} alt="" />
        </div>
      </div>
    </div>

    <hr className='h-[3px] bg-[black] w-[50%] float-right mr-[50px]' />


    <div className='mt-[100px]'>
        <div>
          <p className='text-[40px] ml-[50px] mt-[20px] pr-[100px] text-[#00B3FF]'>Последствия неравенства</p>
          <hr className=' mt-[10px] w-[50%]  ml-[50px] bg-[black] h-[3px]' />
        </div>
      </div>

    <div className='flex mt-[20px] items-center'>
      <div className='w-[30%] '>
        <img src={neraven3} className='m-[auto]' alt="" />
      </div>

      <div className='w-[56%]  mt-[-40px]'>
        <p className='text-[28px]'>Социальное неравенство может иметь серьезные последствия для общества в целом. Оно может приводить к социальным конфликтам, недовольству, низкому уровню благосостояния, ограниченным возможностям для развития и неравному распределению власти и ресурсов.</p>
      </div>
    </div>

    <hr className='h-[3px] bg-[black] w-[50%] float-right mr-[50px] mt-[50px]' />



    <div className='mt-[150px]'>
      <div className=''>
        <p className='text-[40px] ml-[70px] text-[#00B3FF] '>Борьба с неравенством</p>
        <hr className=' mt-[20px] w-[50%]  ml-[50px] bg-[black] h-[3px]' />
      </div>
      
      <div className='flex items-center '>
        <div className='w-[60%]'>
          <p className='text-[24px] ml-[60px]'>Борьба с социальным неравенством требует комплексного подхода. Это может включать в себя создание политик и программ, направленных на сокращение неравенства, повышение доступности образования и здравоохранения, создание равных возможностей для всех членов общества и содействие социальной справедливости.</p>
        </div>

        <div className='w-[30%]'>
          <img src={neraven4} className='m-[auto]' alt="" />
        </div>
      </div>
    </div>

    <hr className='h-[3px] bg-[black] w-[50%] float-right mr-[50px]' />  



    <div className='flex flex-wrap justify-center mt-[100px]'>
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

export default Fifth