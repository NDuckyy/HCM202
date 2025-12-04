import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <img alt="background" className="fixed w-full h-full -z-10" src="https://cdn2.fptshop.com.vn/unsafe/800x0/background_trong_dong_11_ff81c9f1a2.jpg" />
    <App />
  </StrictMode>,
)
