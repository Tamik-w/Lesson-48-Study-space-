// import React, { useState } from 'react';
// import { v4 as uuid } from 'uuid';
// import "./Add.scss"

// const Add = ({ addProduct }) => {
//   const [newProduct, setNewProduct] = useState({ name: '', price: '' });

//   const nameChange = (e) => {
//     setNewProduct({ ...newProduct, name: e.target.value });
//   };

//   const priceChange = (e) => {
//     setNewProduct({ ...newProduct, price: e.target.value });
//   };

//   const addProducts = (e) => {
//     e.preventDefault();

//     const name = newProduct.name.trim();
//     if (name.length < 1) {
//       alert("Please enter a valid product name (at least 1 character)");
//       return;
//     }

//     const price = parseFloat(newProduct.price);
//     if (isNaN(price) || price <= 0) {
//       alert("Please enter a valid product price (greater than 0)");
//       return;
//     }

//     const id = uuid();
//     const product = { ...newProduct, id };

//     addProduct(product);

//     setNewProduct({ name: '', price: 0 });
//   };

//   return (

//     <div className="add">
//         <label>Product name</label>
//         <input
//           type="text"
//           id="name"
//           value={newProduct.name}
//           onChange={nameChange}
//         />
//         <label>Product price</label>
//         <input
//           type="number"
//           id="price"
//           value={newProduct.price}
//           onChange={priceChange}
//         />
//         <button onClick={addProducts} type="submit">Add</button>
//     </div>
//   );
// };

// export default Add;

import styles from './Add.module.scss';
import React, {useState} from "react";

function Add(props){

    const [newProducts, setNewProducts] = useState({name: '', price: '', id: 3})
    const [isValidateName, setIsValidateName] = useState(true);
    const [isValidatePrice, setIsValidatePrice] = useState(true);

    const changeName = (e)=>{
        setNewProducts((prev)=>({...prev, name: e.target.value}))
       }
     
       const changePrice = (e)=>{
         setNewProducts((prev)=>({...prev, price: e.target.value}))
       }

    const addProducts = () => {
        props.onAddProduct(setNewProducts, newProducts, isValidateName, isValidatePrice, setIsValidateName, setIsValidatePrice)
    }

  const validateName = () => {
    newProducts.name.trim().length > 1 ? setIsValidateName(true) : setIsValidateName(false)
  }
  const validatePrice = () => {
    newProducts.price > 0 ? setIsValidatePrice(true) : setIsValidatePrice(false)
  }

    return (
        <div className={styles.add}>
            <label className={isValidateName ? '' : styles.invalid} >Product name</label>
            <input className={isValidateName ? '' : styles.invalid} onBlur={validateName} onInput={changeName} value={newProducts.name} type="text" />
            <label className={isValidatePrice ? '' : styles.invalid}>Product price</label>
            <input className={isValidatePrice ? '' : styles.invalid} onBlur={validatePrice} onInput={changePrice} value={newProducts.price} type="number" />
            <button onClick={addProducts} type="button">Add</button>
        </div>
    )
}

export default Add