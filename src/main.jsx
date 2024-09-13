import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Explore from './Explore'
import Header from './Header'
import './index.css'
import NR from './NR'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Explore></Explore>
    <NR></NR>
  </StrictMode>,
)
