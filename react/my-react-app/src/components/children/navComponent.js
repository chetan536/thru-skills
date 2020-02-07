import React from 'react'


function NavItems({url,children}){
    return(
    <a href={url}>{children}</a>
    )
}


function Nav ({children}){
    let items = React.children.toArray(children);
    for(let i = items.length - 1 ; i >= 1 ; i--){
        items.splice(i,0,
            <span key={i} className='seperator'> | </span>) 
    };
return <div> {items} </div>
}


function NavComponent(){
    return (
        <Nav>
            <NavItems url='/'>Home</NavItems>
            <NavItems url='/'>About</NavItems>
            <NavItems url='/'>Contact</NavItems>

        </Nav>
    )
}

export default NavComponent;


//  from nav sends to navItems and it is sent to NavComponent
