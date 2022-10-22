import React from 'react';
export default function Appwrap() {
    return(
        <div>
            <Navbar>
                <Avatar img="https://plus.unsplash.com/premium_photo-1663050629719-83e16832a804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                name="Bob"
                size="200px">
                 </Avatar>
                 <p>아령하세연</p>
             </Navbar>
             <Navbar>
             
             <Avatar img="https://plus.unsplash.com/premium_photo-1663050629719-83e16832a804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                name="Bob"
                size="200px"></Avatar>
                <p>반가워연</p>
             </Navbar>
            
            
        </div>
    )
    
}
function Navbar({children}) {
    return(
        <div style={{width:"100%",height:"250px",backgroundColor : 'yellow'}}>
             {children}
        </div>
    )
}
function Avatar({img,name,size}) {
    return(
        <div>
            <img
            src={img}
            width={size}
            height={size}
            style={{borderRadius:'50%'}}>
            </img>
        </div>
    );
}