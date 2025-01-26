import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchFace from './Components/SearchFace.jsx'
import { SearchProvider } from './Components/searchContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SearchProvider>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/search' element={<SearchFace/>}/>
    </Routes>
    </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)
