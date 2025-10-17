import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import ProjectsPage from './pages/Projects.jsx'
import AboutPage from './pages/About.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
  <Route path="/sobre-nosotros" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
