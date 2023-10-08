import React from 'react'

const Card = ({img,hewteg,hewteg2,name,about,data}) => {
  return (
    <div className='text-left text-[black]'>
        <img src={img} alt="" className='m-auto w-[80%]' />
        <div className="flex text-[grey] justify-evenly mt-[2%] text-[20px]">
            <h1>{hewteg}</h1>
            <h1>{hewteg2}</h1>
        </div>
        <h1 className='text-[18px] font-[600] mt-[3%] w-[80%] m-auto'>{name}</h1>
        <h1 className='mt-[3%] w-[80%] m-auto'>{about}</h1>
        <h1 className='text-[19px] w-[80%]  m-auto mt-[4%]'>{data}</h1>
        <button className='text-[#4781ED]  text-[19px] ml-[10%] m-auto'>Read More...</button>
    </div>
  )
}

export default Card