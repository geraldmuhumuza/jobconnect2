import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JobBoard from './JobBoard.jsx'
import ProductList from './ProductList.jsx'
import JobList from './JobList.jsx'
import Tips from './Tips.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobBoard />
  </StrictMode>,
)
