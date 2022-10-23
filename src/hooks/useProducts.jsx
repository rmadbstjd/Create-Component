import React, {useState} from 'react';
import { useEffect } from 'react';
export default function useProducts ({salesOnly}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [products, setProducts] = useState([]);
    let url;
    if(salesOnly === false) {
        url = 'data/products.json';
    }
    if(salesOnly === true) {
        url = 'data/saleProducts.json'
    }
    useEffect(() => 
    {
    setLoading(true);   
    fetch(`${url}`)
    .then(res => res.json())
    .then(data => {
        console.log('데이터를 성공적으로 받아옴');
        setProducts(data);  
    })
    .catch(e => {
        setError('에러가 발생했읍니다...');
    })
    .finally(() =>setLoading(false));
    return () => {
        console.log("깨끗하게 청소하는 일들을 함");
    }
        
    },[salesOnly,url]);
    return [loading, error,products];
}