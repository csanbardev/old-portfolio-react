import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { Details } from './components/Details'
export function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='project/:id' element={<Details />} />
      </Routes>
    </>
  )
}

