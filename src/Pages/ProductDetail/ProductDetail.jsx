import React, {useState, useEffect } from 'react'
// import classes from './ProductDetail.module.css'

import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axios from "axios";

import { productUrl } from '../../Api/EndPoints';
import ProductCard from '../../Components/Product/ProductCard';

import Loader from '../../Components/Loader/Loader'


function ProductDetail() {
  
  const [product, setproduct] = useState({});
  const [isLoading, setisLoading] = useState(false)
  const { productId } = useParams()
  useEffect(() => {
    setisLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
    .then((res) => {
      setproduct(res.data)
      setisLoading(false);
    }).catch((err)=>{
      console.log(err);
      setisLoading(false)
    })

  },[])


  return (
    <LayOut>
      {isLoading? (<Loader />) :(<ProductCard 
      product={product} 
      flex ={true}
      renderDesc={true}
      renderAdd={true}
      
      />)}
    </LayOut>
  );
}

export default ProductDetail