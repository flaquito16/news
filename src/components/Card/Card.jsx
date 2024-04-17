import React from 'react'

export const Card = ({img,date,title,description,link}) => {
  return (
      <>
        <div className="content">
        <div className='card-img-1'>
        <img className='card-img' src={img} alt="" />
        </div>
        <div className='card-text'>
        <p className="title-2">{date}</p>
            <p className="title-2">{title}</p>
            <p className="Description-2">{description}</p>
         
            </div>
        </div>
        </>
  )
}