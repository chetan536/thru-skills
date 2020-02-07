import React from 'react'


function handleAction(event){
    // event is an object
    // event is react - synthetic event
    console.log("chid did", event);
    
}




function Parent() {

    // we will include a child component
    return <Child onAction={handleAction} />
}


function Child(props){
    // child should be able to send some data back to parent
    return (<button onClick={props.onAction}>Submit</button>
    )
}


export default Parent;


/*
Parent ----------------> Child
            props
Child ----------------> Parent
            x(props)
*/
