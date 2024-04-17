import React from 'react'

export const Card = ({img,date,title,description}) => {
  return (
      <>
      <div className='text-xs'>

        <img  className='w-24 h-20 m-3' src={img} alt="" />
        <p>{date}</p>
        <p >{title}</p>
         <p className='w-3/4'>{description}</p>
      <hr className='m-1'/>    
      </div>
         
           
  
        </>
  )
}