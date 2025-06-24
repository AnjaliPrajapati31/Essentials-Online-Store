import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Components/Context/ProductContext.jsx'
import {FilterContextProvider} from './Components/Context/FilterContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </AppProvider>
  </StrictMode>
)
