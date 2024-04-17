import React from 'react'

export const Cards = ({img,date,title,description}) => {
  return (
    <>
    <div className=''>

     <img  src={img} alt="" />
        <p >{date}</p>
        <p >{title}</p>
         <p className='w-3/5' >{description}</p>
         
    </div>
    </>
  )
}
