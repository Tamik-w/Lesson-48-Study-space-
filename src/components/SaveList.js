import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux';

const SaveList = (props) => {
  const dispatchFunc = useDispatch();

  const coffeeValue = useSelector((state) => state.coffee);
  const sugarValue = useSelector((state) => state.sugar);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  
  const products = {
    coffee: coffeeValue,
    sugar: sugarValue,
  }

  useEffect(()=>{
    if (localStorage.getItem("coffee")){
      dispatchFunc({type: "save", setCoffee: localStorage.getItem("coffee"), setSugar: localStorage.getItem("sugar")})
    }
  },[])


  const save = () => {
    console.log(products.coffee, products.sugar);
    localStorage.setItem("coffee", products.coffee);
    localStorage.setItem("sugar", products.sugar);
  }

  const clear = () => {
    localStorage.removeItem("coffee");
    localStorage.removeItem("sugar");
    dispatchFunc({type: "clear"});
  }
  return (
    <div className='save'>
          {!isLoggedIn && <p>You must be logged in to save the list.</p>}
          {isLoggedIn && <> 
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button> 
          </>}
      </div>
  )
}

export default SaveList