import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProSidebarProvider>
    <App />
    <ToastContainer position="bottom-left"/>
    </ProSidebarProvider>
  </React.StrictMode>,
)
