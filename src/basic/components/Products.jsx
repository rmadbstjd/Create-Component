import React, {useState} from 'react';
import { useEffect } from 'react';
import useProducts from '../../hooks/useProducts'

export default function Products() {
    const [checked, setChecked]= useState(false);
    const [loading, error, products] = useProducts({salesOnly : checked});
    
    
    const handleChange = () => {
         setChecked((prev) => !prev);
    };
    


    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>{error}</p>
    }
    return <div>
        <input type="checkbox" id="checkbox" value={checked} onChange={handleChange}></input>
        <lable htmlFor='chekcbox'>Show Only Hot Sale!</lable>
        <ul>
            {products.map((product) => (
            <li key = {product.id}>
                <article>
                    <h3>{product.name}
                    </h3>
                    <p>{product.price} </p>
                </article>
            </li>
            ))}
        </ul>
       
    </div>
}         