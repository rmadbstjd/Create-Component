import React, {useState} from 'react';
export default function AppCounter() {
    const [number, setNumber] = useState(0)
    const plusNum = (event) => {
        setNumber(number + 1);
    }
    return (<div className="counter">
                <span className="number">{number}</span>
                <buttn className="button" onClick={plusNum}>Add + </buttn>    
    </div>)
}