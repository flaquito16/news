import React from 'react'

export const Card = ({img,title,description,link}) => {
  return (
      <>
        <div className="content">
        <div className='card-img-1'>
        <img className='card-img' src={img} alt="" />
        </div>
        <div className='card-text'>
            <p className="title-2">{title}</p>
            <p className="Description-2">{description}</p>
            <a href="#" className="link-2">{link}</a>
            </div>
        </div>
        </>
  )
}