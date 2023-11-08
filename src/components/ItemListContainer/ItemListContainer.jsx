import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList]= useState ([]);

    const fetchProduct=() => {
         fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data)=>setProductList(data))
        .catch((error) =>console.error(error));
    } ;

    useEffect(() =>{
        fetchProduct();
    },[]);


    return (
        <div>
          {greeting}
          <ItemCount/>
          <ItemList productList={productList}/>
       </div>
    );
};
export default ItemListContainer;