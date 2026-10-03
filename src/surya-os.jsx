import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/fraunces/full.css'
import '@fontsource-variable/fraunces/full-italic.css'
import '@fontsource-variable/inter-tight'
import './styles/tokens.css'
import './styles/base.css'
import SuryaCaseStudy from './pages/SuryaCaseStudy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SuryaCaseStudy />
  </StrictMode>,
)
