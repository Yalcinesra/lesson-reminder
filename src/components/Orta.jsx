import React from 'react'


const Orta = (props) => {
  const {name,hour,image}=props
  
  

  return (
    <div className="p-2 d-flex flex-row bg-secondary">
    
    <img src={image} alt="" width="70px" />
    <div className="m-3 text-light"><h6>Lesson Name:{name}</h6>
    <h6>Lesson Hour:{hour}</h6></div>
    
    
    
    </div>
  )
}

export default Orta