import React from 'react';
import {useState} from 'react';
import './APPXY.css';

export default function APPXY() {
    //const [x, setX] = useState(0);
    //const [y, setY] = useState(0);
    const[position, setPosition] = useState({x : 0, y : 0});
    const handleMouse = (event) => {
        //setX(event.clientX);
        //setY(event.clientY);
        //수평으로만 이동하고 싶으면?
        setPosition((prev) =>({x : event.clientX, y: prev.y}));
    }
    return(
        <div className="container" onMouseMove={handleMouse}>
            <div className="pointer" style={{transform : `translate(${position.x}px, ${position.y}px)` }}>

            </div>
        </div>
    )
}