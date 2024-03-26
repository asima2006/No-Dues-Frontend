import React, { useState } from 'react'
import AuthContext from './authContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthState = (props) => {
  // console.log("Working");
  const [token, setToken] = useState("");
  const [rows, setRows] = useState([]);
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
    if (data == 401 || data == 409) {
      console.log("Unauthenticated");
      alert("Unauthenticated");
      window.location.href = '/login-dep';
    } else if (data == 200) {
      alert("Success");
      window.location.href = '/dep';
    }
  }

  const fetchDues = async () => {
    try {
      const res = await fetch(`${host}/department/dues`,{
          method: "GET",
          "Authorization": `Bearer ${token}`,
      });
      console.log(token);
      const data = await res.json();
      setRows(data);
    } catch (error) {
      console.log(error);
    }
  }

  const contextValues = {
    token,
    setToken,
    rows,
    fetchDues,
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
