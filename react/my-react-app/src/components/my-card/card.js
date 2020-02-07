import React from 'react'
// import logo from '../../../public/logo192.png'


// component with props
function Avatar(props){
    return <img src={props.image}/>

}

// let us destrucring to extract exact props
function Avatar1({image , width}){
    return <img src={image} width={width} />
}


function Name(props){
    return <h1>{props.name}</h1>
    
}

// destructure and changing name
function Job({job:ab}) {
    return <p> {ab} </p>
    
}



function Card(props) {
    return (
        <div>
            <Avatar image={props.image} width="90" height="50" />
            <Avatar1 image={props.image} width="30" height="50" />
            <Name name={props.name} />
            <Job job={props.job}/>
            <p> {props.location}</p>
            
   
        </div>
    )
}


export default Card;





