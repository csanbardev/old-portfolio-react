import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { Details } from './components/Details'
import { Contact } from './components/Contact'
import { About } from './components/About'
export function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='project/:id' element={<Details />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

