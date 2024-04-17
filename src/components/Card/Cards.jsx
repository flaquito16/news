import React from 'react'

export const Cards = ({img,date,title,description}) => {
  return (
    <>
    <div className='w-1/2'>

     <img  src={img} alt="" />
        <p >{date}</p>
        <p >{title}</p>
         <p >{description}</p>
         
    </div>
    </>
  )
}
