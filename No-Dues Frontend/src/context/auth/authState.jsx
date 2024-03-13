import React from 'react'
import AuthContext from './authContext'

const AuthState = (props) => {
  const host = 'http://localhost:8000'
  const handleLogin = async () => {
    console.log("Work-1");
    const res = await fetch(`${host}/student/login`, {
      method: 'GET',
    });
    const data = await res.json();
    if ('login_url' in data) {
      window.location.href = data.login_url;
    } else {
      console.error('Invalid response:', data);
    }
  };

  const handleDepGET = async () => {
    const res = await fetch(`${host}/department/login`, {
      method: 'GET',
    });
    const data = res.status;
    console.log(data);
    if (data == 401 || data == 409) {
      console.log("Unauthenticated");
      alert("Unauthenticated");
      window.location.href = '/login-dep';
    } else if (data == 200) {
      alert("Success");
      window.location.href = '/dep';
    }
  }


  const contextValues = {
    handleLogin,
    handleDepGET,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState