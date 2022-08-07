import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './components/Home'
export function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
    </>
  )
}

