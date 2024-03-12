import React, { useContext, useEffect } from 'react'
import authContext from '../context/auth/authContext'

const LoginStud = () => {
  const context = useContext(authContext);
  const {getParameterByName} = context;
  useEffect(()=>{
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default LoginStud
