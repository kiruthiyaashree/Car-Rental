import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import FilterList from './components/FilterList'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/filters' element={<FilterList/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App