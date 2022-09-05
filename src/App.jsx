import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { Details } from './components/Details'
import { Contact } from './components/Contact'
import { About } from './components/About'
import './css/base/normalize.css'
import './css/base/reset.css'
import './css/base/global.css'
import './css/utils/fonts.css'
import './css/utils/utilities.css'
import './css/utils/variables.css'
import './css/components/button.css'
import './css/components/card.css'

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

