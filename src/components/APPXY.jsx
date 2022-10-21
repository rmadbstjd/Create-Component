import React from 'react';
import {useState} from 'react';
import './APPXY.css';

export default function APPXY() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const handleMouse = (event) => {
        setX(event.clientX);
        setY(event.clientY);
        console.log(x,y);
    }
    return(
        <div className="container" onMouseMove={handleMouse}>
            <div className="pointer" style={{transform : `translate(${x}px, ${y}px)` }}>

            </div>
        </div>
    )
}