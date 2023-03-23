import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function LogOut() {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const logOut = () => {
    dispatchFunc({ type: 'logOut' })
  }
  return (
    isLoggedIn && <button className='logout' onClick={logOut}>Log Out</button>
  )
}

export default LogOut