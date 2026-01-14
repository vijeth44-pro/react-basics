import React from 'react'

export default function Card({title,description,image}) {
    const newStyle={
        backgroundColor:'lightgrey',
        width:'300px',
        height:'450px',
        color:'black',
        borderRadius:'10px'
    }
  return (
    <div>
        <div style={newStyle}>
            <img src={image} alt="cards" style={{width:'300px', height:'300px' , borderRadius:'10px'}}/>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <p style={{textAlign:'center', fontSize:'15px'}}>{description}</p>
        </div>
    </div>
  )
}
