import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/navbar'
import { ApplicationDashboard } from './components/application_dashboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <ApplicationDashboard />
  </StrictMode>,
)
