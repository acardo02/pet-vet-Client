import React from 'react'
import ReactDOM from 'react-dom/client'
import AppComponent from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './Contexts/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <AppComponent  />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
