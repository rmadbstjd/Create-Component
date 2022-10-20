import React, {useState} from 'react';
import { useEffect } from 'react';


export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked]= useState(false);
    let url;
    const handleChange = () => {
         setChecked((prev) => !prev);
    };
    if(checked === false) {
        url = 'data/products.json';
    }
    if(checked === true) {
        url = 'data/saleProducts.json'
    }
    useEffect(() => {fetch(`${url}`)
    .then(res => res.json())
    .then(data => {
        console.log('데이터를 성공적으로 받아옴');
        setProducts(data);  
    });
    return () => {
        console.log("깨끗하게 청소하는 일들을 함");
    }
        
    },[checked,url]);
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
        <button onClick={() =>setCount((prev)=> prev + 1)}>{count}</button>
    </div>
}        