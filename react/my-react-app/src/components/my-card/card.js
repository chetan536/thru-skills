import React from 'react'
// import logo from '../../../public/logo192.png'

function Card(props) {
    return (
        <div>
            <img src={props.image}/>
            <h1>{props.name}</h1>
            <p> {props.location}</p>
   
        </div>
    )
}


export default Card;





